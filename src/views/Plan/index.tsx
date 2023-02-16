import './Plan.scss'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '~/components/Icons'
// MOCKS
import foodList from '~/mocks/food.json'
import allegentsList from '~/mocks/allergens.json'
import kitchenList from '~/mocks/kitchen.json'

export function Plan() {
  const [step, setStep] = useState<number>(1)
  const [priceRange, setPriceRange] = useState<number>(10)
  const navigate = useNavigate()

  function continueHandler() {
    if (step === 4) navigate('/shopping')
    else {
      setStep(step + 1)
    }
  }

  function RenderList({ list }: { list: string[] }) {
    return (
      <ul>
        {list.map((aller, index) => {
          const refs = useRef(null)

          return (
            <li
              key={index}
              onClick={() => {
                const isCheck = (refs.current! as any).checked
                ;(refs.current! as any).checked = !isCheck
              }}
            >
              <span>{aller}</span>
              <div className="sa-check">
                <input ref={refs} type="checkbox" defaultChecked={false} />
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="Plan">
      <div className="steps">
        {step === 1 && (
          <div className="step step-1">
            <h2>Añade tus alimentos favoritos</h2>
            <p>Dinos qué te encanta para tenerlo en cuenta al elaborar tu plan.</p>

            <div className="sa-group icon">
              <Icon.Search />
              <input type="text" placeholder="Buscar Alimentos" />
            </div>

            <RenderList list={foodList} />
          </div>
        )}

        {step === 2 && (
          <div className="step step-2">
            <h2>Añade tus alimentos prohibidos</h2>
            <p>Indícanos a que alimentos eres alergico y no los incluiremos en tu plan.</p>

            <div className="info">
              <p>Consulta la información sobre alérgenos</p>
              <Icon.Info />
            </div>

            <RenderList list={allegentsList} />
          </div>
        )}

        {step === 3 && (
          <div className="step step-3">
            <h2>Tipo de cocina</h2>

            <RenderList list={kitchenList} />
          </div>
        )}

        {step === 4 && (
          <div className="step step-4">
            <h2>Presupuesto</h2>
            <p>Indácanos cuánto quieres gastar y crearemos un plan que se ajuste lo máximo posible a esa cantidad</p>

            <div className="range-price">
              <div className="title">
                <span className="price">{priceRange}</span>
                <span className="unit">€/día</span>
              </div>
              <input
                type="range"
                min={10}
                max={300}
                onChange={({ target }) => {
                  const range = Number.parseInt(target.value)
                  setPriceRange(range)
                }}
              />
              <div className="min-max">
                <span>10</span>
                <span>300</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="sa-btn icon" onClick={continueHandler}>
        {step < 4 ? (
          <span>Continuar</span>
        ) : (
          <>
            <Icon.Cart />
            <span>Ir al súper</span>
          </>
        )}
      </button>
    </div>
  )
}
