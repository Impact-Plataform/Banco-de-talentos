import React, { Component } from 'react';

class SpeciesFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speciesList: [],
      selectedSpecies: '',
      peopleList: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/species/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          speciesList: data.results
        });
      });
  }

  handleSpeciesChange = (event) => {
    const species = event.target.value;
    this.setState({ selectedSpecies: species });

    fetch(`https://swapi.py4e.com/api/people/?species=${species}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleList: data.results
        });
      });
  }

  render() {
    return (
      <div>       
        <select id="species" onChange={this.handleSpeciesChange} value={this.state.selectedSpecies}>
          <option value="">Selecione uma espécie</option>
          {this.state.speciesList.map(species => (
            <option key={species.name} value={species.name}>{species.name}</option>
          ))}
        </select>

        <ul>
          {this.state.peopleList.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SpeciesFilter;
