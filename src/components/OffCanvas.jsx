import { Link } from "react-router-dom"

export const OffCanvasToggler = () => (
  <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    <span className="navbar-toggler-icon"></span>
  </a>
)

export const OffCanvas = () => {
  return (
    <div 
      className="offcanvas offcanvas-start" 
      tabIndex="-1" id="offcanvasExample" 
      aria-labelledby="offcanvasExampleLabel"
      data-bs-scroll="true"
      aria-controls="offcanvasScrolling"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header justify-content-end">
        {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5> */}
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to='/' className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to='/subjects' className="nav-link">Materias</Link>
          </li>
          <li className="nav-item">
            <Link to='/degrees' className="nav-link">Carreras</Link>
          </li>
          <li className="nav-item">
            <Link to='/users' className="nav-link">Usuarios</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}