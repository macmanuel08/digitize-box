"use server"

import { RowList, Row } from 'postgres';
import { getAppointmentsByMonthYear } from '@/app/lib/data';

export async function fetchAppointments(companyId: string, month: number, year: number): Promise<RowList<Row[]>> {
    return await getAppointmentsByMonthYear(companyId, month, year);
}