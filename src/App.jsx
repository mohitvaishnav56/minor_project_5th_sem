import { BrowserRouter } from "react-router-dom"
import MainRouter from "./routes/MainRouter"
import NavBar from "./components/NavBar"
function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  )
}

export default App
