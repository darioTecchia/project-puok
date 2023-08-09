import FullCalendar from "@fullcalendar/react";
import itLocale from '@fullcalendar/core/locales/it';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventSourceInput } from "@fullcalendar/core/index.js";

import { PeriodicCheck } from "@/models/User";
import dayjs from "dayjs";

export default function AppointmentsCalendar({ appointments }: { appointments: (PeriodicCheck & { name: string })[] }) {

  const events: EventSourceInput = appointments.map(appointment => {
    return {
      date: appointment.date,
      end: dayjs(appointment.date).add(1, 'hour').toDate(),
      title: appointment.name,
    }
  })

  return (
    <div>
      <FullCalendar
        events={events}
        locale={itLocale}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
        }}
      />
    </div>
  )
}