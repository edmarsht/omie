import { useMemo, useState } from "react";
import data from "./data/data.json";
import "./App.css";
import basket from "./assets/basket.png";
import points from "./assets/points.png";
import Item from "./item/Item.js";

// Convert to normal string (without accent & upper case)
const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function App() {
  const [search, setSearch] = useState("");

  const items = useMemo(
    () =>
      search
        ? data.data.allProductReference.filter(({ display_name }) => {
            for (const word of search.split(" ")) {
              if (
                !normalizeString(display_name).includes(normalizeString(word))
              )
                return false;
            }
            return true;
          })
        : data.data.allProductReference,
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
      {/* header */}
      <div className="app__header">
        <div className="app__header-container">
          {/* header left menu */}
          <div className="app__header-menu">
            <div className="app__header-menu-container">
              <h3>👌&ensp;&ensp; Laissez vous guider</h3>
              <p>Acceuill</p>
              <p>Les meilleures ventes</p>
              <p>Afficher plus </p>
            </div>
            <div className="app__header-menu-container">
              <h3>👌&ensp;&ensp; Laissez vous guider</h3>
              <p>Acceuill</p>
              <p>Les meilleures ventes</p>
              <p>Afficher plus </p>
            </div>
            <div className="app__header-menu-container">
              <h3>👌&ensp;&ensp; Laissez vous guider</h3>
              <p>Acceuill</p>
              <p>Les meilleures ventes</p>
              <p>Afficher plus </p>
            </div>
            <div className="app__header-menu-container">
              <h3>👌&ensp;&ensp; Laissez vous guider</h3>
              <p>Acceuill</p>
              <p>Les meilleures ventes</p>
              <p>Afficher plus </p>
            </div>
          </div>
          {/* header results */}
          <div className="app__result">
            <h3 className="app__result-title">Les produits d'Omie</h3>
            <div className="app__header-search">
              {items.slice(0, 15).map((item) => (
                <Item name={item.display_name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
