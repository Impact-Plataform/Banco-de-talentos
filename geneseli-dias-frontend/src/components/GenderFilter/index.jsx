import React, { Component } from 'react';

class GenderFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: ''
    };

    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleGenderChange(event) {
    this.setState({
      gender: event.target.value
    });
  }
  
  render() {
    return (      
        <select id="gender-select" value={this.state.gender} onChange={this.handleGenderChange}>
          <option value="">Selecione o Gênero</option>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">N/A</option>
          <option value="hermaphrodite">Hermaphrodite</option>
          <option value="none">None</option>
        </select>
    );
  }
}

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/')
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }));
  }

  render() {
    const { gender } = this.props;
    const filteredCharacters = gender ? this.state.characters.filter(character => character.gender === gender) : this.state.characters;

    return (
      <div>
        <ul>
          {filteredCharacters.map(character => (
            <li key={character.url}>{character.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render(gender) {
    return (
      <div>
        <GenderFilter gender={gender} />
        
        
      </div>
    );
  }
}

export default App;

