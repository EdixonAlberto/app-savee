import './Payment.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Payment() {
  const navigate = useNavigate()
  const business = 'edixonalbertto@gmail.com'
  const isPayment = JSON.parse(localStorage.getItem('payment') || 'false') as boolean

  function finishPayment() {
    localStorage.setItem('payment', 'true')
  }

  // Add logic to simulate payment success
  useEffect(() => {
    if (isPayment) {
      navigate('/payment-success', { replace: true })
    } else {
      localStorage.setItem('payment', 'false')
    }
  }, [])

  if (isPayment) return null

  return (
    <div className="Payment">
      <h2>Verificar Pago</h2>

      <div className="card-info">
        <button className="sa-btn">Editar</button>

        <h3>Entrega</h3>
        <p>Miercoles, 29 de julio de 10:00 a 11:00</p>

        <p>Calle de Chile,24,3° E,28016,Madrid</p>
        <p>687 688 156</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat architecto error iusto dolore quos, est
          ipsam esse incidunt minima excepturi.
        </p>
      </div>

      <div className="card-info">
        <button className="sa-btn">Cambiar Tarjeta</button>

        <h3>Metodo de pago</h3>
        <p>Visa **** **** **** 0123</p>
      </div>

      <div className="card-info">
        <button className="sa-btn">Añadir</button>
        <p>¿Tienes un código de descuento?</p>
      </div>

      <div className="card-payment">
        <div>
          <p>Productos:</p>
          <p>81,23 €</p>
        </div>

        <div>
          <p>Envío:</p>
          <p>4,99 €</p>
        </div>

        <div className="total">
          <p>Total (IVA incluido):</p>
          <p>86,22 €</p>
        </div>

        {/* <button className="sa-btn">
          <span>Autorizar pago</span>
        </button> */}

        <form className="button-paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_xclick" />
          <input type="hidden" name="business" value={business} />
          <input type="hidden" name="lc" value="ES" />
          <input type="hidden" name="button_subtype" value="services" />
          <input type="hidden" name="no_note" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
            name="submit"
            alt="PayPal, la forma rápida y segura de pagar en Internet."
            onClick={finishPayment}
          />
          <img
            alt="button pay of paypal"
            src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  )
}
