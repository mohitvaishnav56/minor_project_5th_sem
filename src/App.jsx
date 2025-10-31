import { BrowserRouter } from "react-router-dom"
import MainRouter from "./routes/MainRouter"
function App() {

  return (
    <>
      <div className="w-full bg-zinc-700 p-4 text-white text-center">NavBar Goes Here</div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  )
}

export default App
