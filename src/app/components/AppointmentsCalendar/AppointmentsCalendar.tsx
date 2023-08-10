import FullCalendar from "@fullcalendar/react";
import itLocale from '@fullcalendar/core/locales/it';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import { EventSourceInput } from "@fullcalendar/core/index.js";

import { PeriodicCheck } from "@/models/User";
import dayjs from "dayjs";
dayjs.locale('it');

export default function AppointmentsCalendar({ appointments }: { appointments: (PeriodicCheck & { name?: string })[] }) {

  const events: EventSourceInput = appointments.map(appointment => {
    const endDate = dayjs(appointment.date).add(1, 'hour').toDate();
    return {
      date: appointment.date,
      end: endDate,
      title: appointment.name || 'Appuntamento',
      url: `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${dayjs(appointment.date).format('YYYYMMDDTHHmmssZ')}%2F${dayjs(endDate).format('YYYYMMDDTHHmmssZ')}&details=Appuntamento${appointment.name ? ' con ' + appointment.name : ' Dietologo'}&location=&text=Appuntamento${appointment.name ? ' con ' + appointment.name : ' Dietologo'}`
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
        window.open(info.event.url);
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