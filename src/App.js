import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import data from "./data/data.json";
import "./App.css";
import basket from "./assets/basket.png";
import points from "./assets/points.png";

const fuse = new Fuse(data.data.allProductReference, {
  keys: ["display_name"],
  includeScore: true,
  isCaseSensitive: false,
  shouldSort: true,
  threshold: 0.35,
  distance: 50,
});

const empty = [];

function App() {
  const [search, setSearch] = useState("");

  const items = useMemo(
    () => (search ? fuse.search(search).map(({ item }) => item) : empty),
    [search]
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="app">
      {/* navbar */}
      <div className="app__navbar">
        <div className="app__navbar-left">
          <h1>omie&cie</h1>
          <input
            value={search}
            onChange={handleSearchChange}
            placeholder="Chercher un produit..."
          />
        </div>
        <div className="app__navbar-right">
          <div className="app__navbar-right-name">
            <h3>Edouard</h3>
            <img src={points} alt="menu" />
          </div>
          <img src={basket} alt="shopping bag" />
        </div>
      </div>
      {/* Résults */}
      <div className="app__search section__margin section__padding">
      {items.slice(0, 20).map((item, index) => (
        <ul>
          <li>{item.display_name}</li>
        </ul>
      ))}
      </div>
    </div>
  );
}

export default App;
