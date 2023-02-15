import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '~/scss/main.scss'

// VIEWS
import { Home } from '~/views/Home'
import { Login } from '~/views/Auth/Login'
import { Cart } from '~/views/Cart'
import { Payment } from '~/views/Payment'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
