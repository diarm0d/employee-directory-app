import { Component } from 'react'
import { CardList } from './components/cardlist/cardlist';
import { SearchBox } from './components/searchbox/searchbox'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
       people: [],
       searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=52')
    .then(response => response.json())
    .then(employees => 
      this.setState(
        { people: employees.results }
      ));
  }

  handleChange = (e) => { 
    this.setState({searchField: e.target.value}) 
  }

  render() {
    const { people, searchField} = this.state;
    const filteredPeople = people.filter(person => 
      person.name.last.toLowerCase().includes(searchField.toLowerCase()) || person.name.first.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <SearchBox placeholder="search employees" handleChange={this.handleChange} />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}


export default App;
