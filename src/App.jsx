import Navbar from "./components/Navbar"
import { OffCanvas } from "./components/OffCanvas"

function App() {
  return (
    <div>
      {/* <h1>Hello world!</h1> */}
      <Navbar />
      <OffCanvas />
      <div className="container">
        <img src="https://gstatic.com/classroom/themes/Honors.jpg" alt="" />
      </div>
    </div>
  )
}

export default App
