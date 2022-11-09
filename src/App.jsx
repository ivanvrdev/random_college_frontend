import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { OffCanvas } from "./components/OffCanvas"
import PostInput from "./components/PostInput"

function App() {
  return (
    <div>
      {/* <h1>Hello world!</h1> */}
      <Navbar />
      <OffCanvas />
      <div className="container">
        <Banner />
        <PostInput />
      </div>
    </div>
  )
}

export default App
