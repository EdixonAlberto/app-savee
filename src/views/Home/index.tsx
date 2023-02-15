import './Home.scss'

export function Home() {
  return (
    <div className="Home">
      <div className="home-header">
        <img className="logo" src="/static/img/logo.png" alt="logo company" />
        <h2>Savee</h2>
      </div>

      <div className="home-title">
        <p>
          Entrega en <span className="code">28016</span>
        </p>

        <div className="title">
          <h3>¡Hola, Carmen!</h3>
          <p>¿En qué podemos ayudarte hoy?</p>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <p className="title">Plan de Comidas</p>
          <p className="content">Crea tus propios menús para el período que tú elijas.</p>
          <button className="sa-btn">
            <span>Crear plan</span>
          </button>
          <div className="banner-right">illustration</div>
        </div>

        <div className="card">
          <p className="title">El Super</p>
          <p className="content">Compra a tu gusto o a partir de un plan de comidas.</p>
          <button className="sa-btn">
            <span>Llenar carrito</span>
          </button>
          <div className="banner-right">illustration</div>
        </div>
      </div>
    </div>
  )
}
