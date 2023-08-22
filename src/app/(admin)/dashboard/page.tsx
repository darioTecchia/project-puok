"use client";

import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { PeriodicCheck, User } from "@/models/User";
import { EXAMPLE_USERS } from "@/models/example";
import NewUserForm from "@/app/components/NewUserForm/NewUserForm";
import UsersList from "@/app/components/UsersList/UsersList";
import AppointmentsCalendar from "@/app/components/AppointmentsCalendar/AppointmentsCalendar";

let USERS: User[] = EXAMPLE_USERS;

export default function Dashboard() {

  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log('onSubmit', data);
    data.id = data.email;
    data.periodicChecks = [];
    data.diets = [];
    setUsers(users.concat(data));
  };

  const getAllAppointments = (): (PeriodicCheck & { name: string })[] => {
    return users.flatMap(user => {
      const userName = `${user.firstName} ${user.lastName}`;
      return user.periodicChecks.map(periodicCheck => ({ name: userName, ...periodicCheck }));
    });
  };

  const [users, setUsers] = useState(USERS);

  return (
    <main id='dashboard'>
      <div className='container py-3'>
        <div className='mb-4'>
          <h1 className='display-1'>Benvenuto, Admin!</h1>
          All&apos;interno di questa pagina troverai tutti i tuoi pazienti con indicata la data dell&apos;ultimo appuntamento o del prossimo appuntamento.
          <br />
          Clicca sul paziente per accedere alla sezione dedicata a lui: potrai vedere o modificare la sua dieta, visualizzare il suo andamento e gestire il suo profilo.
        </div>

        <div className="card mb-4">
          <div className="card-header">
            Pazienti
          </div>
          <div className="card-body">
            <UsersList users={users} />

            <div className="card mt-3">
              <div className="card-header">
                Censisci nuovo paziente
              </div>
              <div className="card-body">
                <NewUserForm onSubmit={onSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            Calendario appuntamenti
          </div>
          <div className="card-body">
            <AppointmentsCalendar appointments={getAllAppointments()} />
          </div>
        </div>
      </div>
    </main>
  )
}
