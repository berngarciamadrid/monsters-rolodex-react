import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    // Nos da acceso a los métodos y variables de la clase padre
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}));

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        {/* <input type="search" placeholder="search monsters" 
        onChange={e => this.setState({searchField: e.target.value})}/> */}
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
