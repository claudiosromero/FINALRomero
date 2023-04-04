import "./App.css";
import ItemList from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";


function App() {

  let saludo = "Bienvenido!"
  let nombre = "Claudio"


  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} nombre={nombre} />
    </div>
  );
}

export default App;
