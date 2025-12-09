import { NextResponse } from 'next/server';
import { getAppointments, updateAppointmentsStatus } from '@/app/lib/actions';
import { fetchCompanyAvailability } from '@/app/lib/data';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const getAvailability = searchParams.get('availability');

  if (getAvailability && id != null) {
    const availabilities = await fetchCompanyAvailability(id);
    return NextResponse.json(availabilities);
  }

  const appointments = await getAppointments(id);
  return NextResponse.json(appointments);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  await updateAppointmentsStatus(body);
  return NextResponse.json({ success: true });
}