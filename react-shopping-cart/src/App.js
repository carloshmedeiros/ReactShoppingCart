import { Home } from "./pages/Home";
import { Nav } from "./components/Menu"
import  Carrinho  from "./components/Carrinho";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Carrinho/>
      <Home/>
    </div>
  );
}

export default App;
