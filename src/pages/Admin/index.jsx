import { useState, useContext, useEffect } from 'react'
import { ViewContext, ViewContextProvider } from './context/ViewContext'
import Card from '../../components/Card'

const NavItem = ({name, description}) => {

  const { selectedView, setSelectedView } = useContext(ViewContext)

  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    if(selectedView !== name){
      setIsActive(false)
      return
    }

    setIsActive(true)
  }, [selectedView])

  return(
    <button 
      type='button' 
      className={"btn btn-outline-secondary" + (isActive ? " active" : "")}
      onClick={()=>{setSelectedView(name)}}
    >
      {description}
    </button>
  ) 
}

const Admin = () => {
  return (
    <ViewContextProvider>
      <div className="container">
        <p className='fs-3 mb-2 text-center'>Panel de administración</p>
        <div className="btn-group d-flex mb-2">
          <NavItem name="users" description="Usuarios" />
          <NavItem name="subjects" description="Materias" />
          <NavItem name="degrees" description="Carreras" />
        </div>
        <div className='mb-2 text-end'>
          <button className='btn btn-secondary'>Agregar</button>
        </div>
        <div className="row">
          <Card 
            image="https://res.cloudinary.com/ivanvrdev/image/upload/v1665070081/DEV/oblnzfzrlkyf4gkxemvl.png" 
            header="CORS ERROR LOVER"
            subHeader="Estudiante de psicología"
            path={'/'} 
          />
          <Card 
            image="https://res.cloudinary.com/ivanvrdev/image/upload/v1665070081/DEV/oblnzfzrlkyf4gkxemvl.png" 
            header="CORS ERROR LOVER"
            subHeader="Estudiante de psicología"
            path={'/'} 
          />
          <Card 
            image="https://res.cloudinary.com/ivanvrdev/image/upload/v1665070081/DEV/oblnzfzrlkyf4gkxemvl.png" 
            header="CORS ERROR LOVER"
            subHeader="Estudiante de psicología"
            path={'/'} 
          />
          <Card 
            image="https://res.cloudinary.com/ivanvrdev/image/upload/v1665070081/DEV/oblnzfzrlkyf4gkxemvl.png" 
            header="CORS ERROR LOVER"
            subHeader="Estudiante de psicología"
            path={'/'} 
          />
          <Card 
            image="https://res.cloudinary.com/ivanvrdev/image/upload/v1665070081/DEV/oblnzfzrlkyf4gkxemvl.png" 
            header="CORS ERROR LOVER"
            subHeader="Estudiante de psicología"
            path={'/'} 
          />
        </div>
        <nav>
          <ul className="pagination justify-content-end">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </ViewContextProvider>
  )
}

export default Admin