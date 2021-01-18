import React, { useState, useEffect} from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  // tricky second param, calls useEffect just when the second param is changed
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  const handleChange = e => {
    setSearchField(e.target.value);
  }

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
