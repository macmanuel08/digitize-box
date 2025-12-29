import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';
import { getUserCompanyIdByEmail, getCompanySubscriptionStatus } from '@/app/lib/data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          const companyId = await getUserCompanyIdByEmail(email);

          if (passwordsMatch && companyId) {
            const subscriptionStatus = await getCompanySubscriptionStatus(companyId);
            if (subscriptionStatus != 'pending') return user;
            throw new Error('AccountPending');
          }
        }

        return null;
      },
    }),
  ],

  callbacks: {
    authorized: authConfig.callbacks?.authorized,

    async jwt({ token, user }) {
      if (user) {
        token.company_id = user.company_id;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.email = user.email;
        token.role = user.role;
        token.phone = user.phone;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.company_id = token.company_id as string; // type can cause bug
      session.user.first_name = token.first_name as string;
      session.user.last_name = token.last_name as string;
      session.user.email = token.email as string;
      session.user.role = token.role as string;
      session.user.phone = token.phone as string;
      return session;
    },
  }
});
