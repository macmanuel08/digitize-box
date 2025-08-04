import { NextResponse } from "next/server";
import { getTakenTimeslots } from "@/app/lib/actions";

export async function POST(req: Request) {
    const { date } = await req.json();
    const parsedDate = new Date(date);

    const takenTimeslots = await getTakenTimeslots(parsedDate);
    return NextResponse.json(takenTimeslots);
}