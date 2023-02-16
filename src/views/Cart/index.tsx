import './Cart.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '~/components/Icons'
// MOCKS
import foodList from '~/mocks/food.json'

export function Cart() {
  const navigate = useNavigate()

  function finishShopping() {
    localStorage.setItem('payment', 'false')
    navigate('/payment')
  }

  return (
    <div className="Cart">
      <h2>El súper</h2>

      <div className="info">
        <p>
          Hemos puesto los alimentos necesarios para tu plan en el carrito, puedes editarlo a tu gusto y añadir otross
          productos que no sean de alimentación.
        </p>
      </div>

      <p className="text-date">Productos de tu plan del 29 jul al 4 ago</p>

      <ul>
        {foodList.map((food, index) => {
          const [qtyCart, setQtyCart] = useState<number>(1)

          return (
            <li key={index} className="card">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${food.image})`
                }}
              ></div>

              <div className="content">
                <Icon.Menu />

                <h3 className="title">{food.name}</h3>

                <div className="details">
                  <span className="qty">{food.qty} g</span>
                  <span> | </span>
                  <span className="price">{food.price} €</span>
                </div>

                <div className="buttons">
                  <button onClick={() => (qtyCart < 2 ? null : setQtyCart(qtyCart - 1))}>-</button>
                  <span>{qtyCart}</span>
                  <button onClick={() => setQtyCart(qtyCart + 1)}>+</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <button className="sa-btn" onClick={finishShopping}>
        <span>Total 73.23 €</span>
        <span> | </span>
        <span>Finalizar compra</span>
      </button>
    </div>
  )
}
