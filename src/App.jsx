import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home_page from './components/home_page'
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home_page/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
