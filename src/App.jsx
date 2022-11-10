import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { OffCanvas } from "./components/OffCanvas"
import PostInput from "./components/PostInput"
import Post from "./components/Post"

function App() {
  return (
    <div className="">
      <Navbar />
      <OffCanvas />
      <div className="container">
        <Banner />
        <PostInput />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
