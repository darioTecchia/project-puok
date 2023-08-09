"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import './home.scss'

export default function Home() {

  const router = useRouter()

  const [isAdmin, setIsAdmin] = useState(false)

  const nav = () => {
    router.push(isAdmin ? '/dashboard' : '/diet');
  }

  return (
    <main id='home' className='d-flex align-items-center py-4 bg-body-tertiary h-100'>
      <div className="form-signin w-100 m-auto">
        <h1>Project codename PUOK</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          <label htmlFor="email">Indirizzo email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-check text-start mt-3">
          <input onChange={() => setIsAdmin(!isAdmin)} checked={isAdmin} className="form-check-input" type="checkbox" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Admin?
          </label>
        </div>
        <div className='text-muted mb-3'>
          La login è ancora mockata, spunta questa casella e clicca su <strong>Accedi</strong> per accedere alla sezione admin.
        </div>
        <button onClick={nav} className="btn btn-primary w-100 py-2" type="submit">Accedi</button>
      </div>
    </main>
  )
}