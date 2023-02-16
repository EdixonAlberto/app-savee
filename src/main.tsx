import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '~/scss/main.scss'

// VIEWS
import { Login } from '~/views/Auth/Login'
import { LayoutMain } from '~/Layouts/LayoutMain'
import { Home } from '~/views/Home'
import { Plan } from '~/views/Plan'
import { Cart } from '~/views/Cart'
import { Payment } from '~/views/Payment'
import { Profile } from '~/views/Profile'
import { PaymentSuccess } from '~/views/PaymentSuccess'
import { NotFound } from '~/views/NotFound'

const isDesktop = window.screen.width > 768

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {isDesktop ? (
      <div className="is-desktop">
        <span>
          Por el momento esta aplicación web solo está disponible para su visualización en pantallas menores a 768px de
          ancho.
        </span>
      </div>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LayoutMain children={<Home />} />} />
          <Route path="/plan" element={<LayoutMain children={<Plan />} />} />
          <Route path="/shopping" element={<LayoutMain children={<Cart />} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<LayoutMain children={<Profile />} />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )}
  </React.StrictMode>
)
