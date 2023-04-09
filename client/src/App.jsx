import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar";
function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
    <div className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>

    </div>
    </div>
  )
}

export default App
