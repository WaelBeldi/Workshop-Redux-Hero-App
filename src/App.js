import { useState } from "react";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import HeroList from "./Components/HeroList";
// import { heroData } from "./Data";
import AddHero from "./Components/AddHero";
import { useSelector } from "react-redux";

function App() {
  // const [heroes, setHeroes] = useState(heroData);
  const [filterName, setFilterName] = useState("");
  const heroes = useSelector(state => state.heroReducer.heroData)

  return (
    <div className="App">
      <div className="header">
        <SearchAppBar setFilterName={setFilterName} />
      </div>
      <div className="hero-add">
        <AddHero heroes={heroes} />
      </div>
      <HeroList heroes={heroes} filterName={filterName} />
    </div>
  );
}

export default App;
