import { useState ,useEffect } from "react";
import clsx from "clsx";

type AppointmentTimePickerProps = {
	takenTimeslots: string[];
}

const timeslots = [
	'09:00:00',
	'09:30:00',
	'10:00:00',
	'10:30:00',
	'11:00:00',
	'11:30:00',
	'13:00:00',
	'13:30:00',
	'14:00:00',
	'14:30:00',
	'15:00:00',
	'15:30:00',
	'16:00:00',
	'16:30:00',
	'17:00:00',
	'17:30:00',
	'18:00:00',
];

export default function AppointmentTimePicker({ takenTimeslots }: AppointmentTimePickerProps) {
	const [selectedTime, setSelectedTime] = useState<string>();

	useEffect(() => {
		const input = document.getElementById('appointmentTime') as HTMLInputElement;
		if (input && selectedTime) {
		  input.value = selectedTime;
		}
	}, [selectedTime]);

	return (
		<div className="relative">
			<div className="flex gap-4 flex-wrap max-w-[575px]">
				{timeslots.map((slot) => {
					if (!takenTimeslots.includes(slot)) {
						const splitTimestamp = slot.split(":");
						const hour: number = Number(splitTimestamp[0]);
						const minutes = splitTimestamp[1];
						return (
								<div
									key={slot}
									className={clsx(
										'flex h-8 items-center rounded-md px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
										selectedTime == slot ? 'bg-green-500' : 'bg-blue-400'
									)}
									onClick={() => {
										setSelectedTime(slot);
									}}
								>
									{hour > 12 ? `${hour - 12}:${minutes} PM`: `${hour}:${minutes} AM` }
								</div>
						);
					}
				})}
			</div>
			<input type="hidden" name="appointmentTime" id="appointmentTime" />
		</div>
	);
}