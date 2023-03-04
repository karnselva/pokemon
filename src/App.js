import PokemonCards from "./Screens/PokemonCards"
import {Route,Routes} from "react-router-dom"
import PokemonDetails from "./Screens/PokemonDetails";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<PokemonCards/>}/>
        <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
       </Routes>
     
    </div>
  );
}

export default App;
