import { NextResponse } from 'next/server';
import { getAppointments, updateAppointmentsStatus } from '@/app/lib/actions';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const appointments = await getAppointments(id);
  return NextResponse.json(appointments);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  await updateAppointmentsStatus(body);
  return NextResponse.json({ success: true });
}