import './PaymentSuccess.scss'
import { Icon } from '~/components/Icons'
import { useNavigate } from 'react-router-dom'

export function PaymentSuccess() {
  const navigate = useNavigate()

  return (
    <div className="PaymentSuccess">
      <div className="content">
        <Icon.Check color="#6FBA31" size={100} />

        <h2>Tu compra se ha realizado con éxito</h2>

        <div>
          <p>La recibirás el miércoles, 29 de julio</p>
          <p>entre las 10:00 y las 11:00.</p>
        </div>
      </div>

      <div className="action">
        <button className="sa-btn" onClick={() => navigate('/profile', { replace: true })}>
          <span>Ir a tus compras</span>
        </button>

        <p className="text-home" onClick={() => navigate('/', { replace: true })}>
          Volver al inicio
        </p>
      </div>
    </div>
  )
}
