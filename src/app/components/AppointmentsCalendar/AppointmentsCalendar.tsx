import FullCalendar from "@fullcalendar/react";
import itLocale from '@fullcalendar/core/locales/it';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import { EventSourceInput } from "@fullcalendar/core/index.js";

import { PeriodicCheck } from "@/models/User";
import dayjs from "dayjs";

export default function AppointmentsCalendar({ appointments }: { appointments: (PeriodicCheck & { name?: string })[] }) {

  const events: EventSourceInput = appointments.map(appointment => {
    return {
      date: appointment.date,
      end: dayjs(appointment.date).add(1, 'hour').toDate(),
      title: appointment.name || 'Appuntamento',
      url: 'asdasda'
    }
  })

  return (
    <FullCalendar
      eventSources={[
        {
          events,
          backgroundColor: '#007bff',
        },
        {
          url: 'https://calendars.icloud.com/holidays/it_it.ics/',
          format: 'ics',
          backgroundColor: '#dc3545'
        }
      ]}
      eventClick={(info) => {
        info.jsEvent.preventDefault();
        console.log(info.event);
      }}
      navLinks={true}
      locale={itLocale}
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        iCalendarPlugin,
      ]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,today,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
      }}
    />
  )
}