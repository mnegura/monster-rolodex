import React, { useEffect} from "react";
import { connect } from 'react-redux';
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

import { setSearchField } from "./actions"
import { getMonsters } from "./actions";

const mapStateToProps = (state) => ({
  searchField: state.searchMonsters.searchField,
  monsters: state.getMonsters.monsters,
  isPending: state.getMonsters.isPending,
  error: state.getMonsters.error
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onGetMonsters: () => getMonsters(dispatch)
})

function App(props) {
  const { monsters, searchField, onSearchChange } = props;

  // tricky second param, calls useEffect just when the second param is changed
  useEffect(() => {
    props.onGetMonsters();
  }, []);

  // const handleChange = e => {
  //   setSearchField(e.target.value);
  // }

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        handleChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
