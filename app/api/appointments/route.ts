import { NextResponse } from 'next/server';
import { getAppointments, updateAppointmentsStatus } from '@/app/lib/actions';

export async function GET() {
  const appointments = await getAppointments();
  return NextResponse.json(appointments);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  await updateAppointmentsStatus(body);
  return NextResponse.json({ success: true });
}