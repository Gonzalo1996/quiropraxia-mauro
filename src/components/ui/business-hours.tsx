
interface ScheduleItem {
  day: string;
  hours: string;
}

interface BusinessHoursProps {
  title?: string;
  schedule?: ScheduleItem[];
  phone?: string;
}

const defaultSchedule: ScheduleItem[] = [
  { day: "Lunes", hours: "14:00 a 20:00" },
  { day: "Martes", hours: "9:00 a 14:30" },
  { day: "Miércoles", hours: "14:00 a 20:00" },
  { day: "Jueves", hours: "9:00 a 14:30" },
  { day: "Viernes", hours: "14:00 a 20:00" },
];

export default function BusinessHours({
  title = "Horario Semanal",
  schedule = defaultSchedule,
  phone = "",
}: BusinessHoursProps) {
  return (
    <div className="business-hours">
      <h3 className="business-hours-title">{title}</h3>

      <div className="business-hours-list">
        {schedule.map((item) => (
          <div className="business-hours-row" key={item.day}>
            <span>{item.day}</span>
            <span className="business-hours-time">
              {item.hours}
            </span>
          </div>
        ))}
      </div>


    {phone && (
    <a
        className="business-hours-phone"
        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
    >
        <img
        className="business-hours-phone-icon"
        src="/images/telefono.png"
        alt=""
        />

        <span className="business-hours-phone-text">
        <span className="business-hours-phone-label">Comunicate</span>
        <strong>{phone}</strong>
        </span>
    </a>
    )}

    </div>
  );
}
