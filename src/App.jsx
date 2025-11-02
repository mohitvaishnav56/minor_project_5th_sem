import { BrowserRouter } from "react-router-dom"
import MainRouter from "./routes/MainRouter"
import NavBar from "./components/NavBar"
function App() {

  return (
    <>
      
      <BrowserRouter>
      <NavBar />
        <MainRouter />
      </BrowserRouter>
    </>
  )
}

export default App
