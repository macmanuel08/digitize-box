import { formatTo12Hour } from "@/app/lib/data";

type ScheduleItem = {
  start_time: string;
  end_time: string;
  day_of_week: number;
};

type OfficeHoursTableProps = {
  schedule: ScheduleItem[];
};

const DAYS_OF_WEEK: Record<number, string> = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};

export function OfficeHoursTable({ schedule }: OfficeHoursTableProps) {
  return (
    <table className="border-separate border-spacing-x-6 border-spacing-y-2">
      <thead>
        <tr>
          <th className="text-left">Day</th>
          <th className="text-left">Hours</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(DAYS_OF_WEEK).map(([dayNumber, dayName]) => {
          const daySchedule = schedule.find(
            item => item.day_of_week === Number(dayNumber)
          );

          return (
            <tr key={dayNumber}>
              <td>{dayName}</td>
              <td>
                {daySchedule ? (
                  <>
                    {formatTo12Hour(daySchedule.start_time)} –{' '}
                    {formatTo12Hour(daySchedule.end_time)}
                  </>
                ) : (
                  'Closed'
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}