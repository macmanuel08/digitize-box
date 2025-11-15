import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    subscriber_id?: string | null;
    company_id?: string | null;
  }

  interface Session extends DefaultSession {
    user: {
      subscriber_id?: string | null;
      company_id?: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    subscriber_id?: string | null;
    company_id?: string | null;
  }
}