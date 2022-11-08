export const OffCanvasButton = () => (
  <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    Link with href
  </a>
)

export const OffCanvas = () => {
  return (
    <div 
      className="offcanvas offcanvas-end" 
      tabindex="-1" id="offcanvasExample" 
      aria-labelledby="offcanvasExampleLabel"
      data-bs-scroll="true"
      aria-controls="offcanvasScrolling"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <div className="dropdown mt-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}