import './Login.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [validFields, setValidFields] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  async function submitHandler(event: any): Promise<void> {
    event.preventDefault()
    if (loading) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/', { replace: true })
    }, 2000)
  }

  useEffect(() => {
    setValidFields(email.length > 0 && password.length > 0)
  }, [email, password])

  return (
    <div className="Login">
      <div className="title">
        <h2>
          <p>¡Te damos la </p>
          <p>bienvenida a Savee!</p>
        </h2>
        <img className="logo" src="/static/img/logo.png" alt="logo company" />
      </div>

      <form onSubmit={submitHandler}>
        <div className="sa-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email@example.com"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="sa-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <div className="options">
          <div className="sa-check">
            <input type="checkbox" name="remember" />
            <span>Recuérdame</span>
          </div>
          <span>He olvidado la contraseña</span>
        </div>

        <button className={'sa-btn' + (loading ? ' loading' : '')} type="submit" disabled={loading || !validFields}>
          <span>Acceder</span>
        </button>

        <p className="text-signup" onClick={() => navigate('/signup', { replace: true })}>
          Crear Cuenta
        </p>
      </form>
    </div>
  )
}
