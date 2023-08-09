"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "@/models/User";

import "./NewUserForm.scss";
import { useState } from "react";

export default function NewUserForm({ onSubmit }: { onSubmit: any }) {

  const { register, formState: { errors }, handleSubmit } = useForm<User & { passwordConfirm: string }>();

  const onSubmitMiddleware: SubmitHandler<User & { passwordConfirm: string }> = (data: User & { passwordConfirm: string }) => {
    console.log('onSubmitMiddleware', data);
    setArePasswordsEqual(data.password == data.passwordConfirm);
    if (data.password == data.passwordConfirm) {
      onSubmit(data);
    }
  };

  const [arePasswordsEqual, setArePasswordsEqual] = useState(true);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitMiddleware)} className="row g-3" noValidate>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label mb-1">Nome</label>
          <input type="text" className={"form-control " + (errors.firstName ? "is-invalid" : "")} id="firstName" {...register("firstName", { required: true })} />
          {errors.firstName && <div className="text-danger">Inserisci un nome valido!</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label mb-1">Cognome</label>
          <input type="text" className={"form-control " + (errors.lastName ? "is-invalid" : "")} id="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && <div className="text-danger">Inserisci un cognome valido!</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label mb-1">Email</label>
          <input type="email" className={"form-control " + (errors.email ? "is-invalid" : "")} id="email" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
          {errors.email && <div className="text-danger">Inserisci un'email valida!</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label mb-1">Password</label>
          <input type="password" className={"form-control " + (errors.password ? "is-invalid" : "")} id="password" {...register("password", { required: true })} />
          {errors.password && <div className="text-danger">Inserisci una password valida!</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="passwordConfirm" className="form-label mb-1">Conferma password</label>
          <input type="password" className={"form-control " + (errors.passwordConfirm || !arePasswordsEqual ? "is-invalid" : "")} id="passwordConfirm" {...register("passwordConfirm", { required: true })} />
          {errors.passwordConfirm && <div className="text-danger">Inserisci una password valida!</div>}
          {!arePasswordsEqual && <div className="text-warning">Assicurati che le due password corrispondino!</div>}
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Salva</button>
        </div>
      </form>
    </div>
  )
}