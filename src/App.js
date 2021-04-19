import { Component } from 'react'
import { CardList } from './components/cardlist/cardlist';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
       people: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=52').then(response => response.json()).then(employees => this.setState({ people: employees.results }));
  }

  render() {
    return (
      <div className="App">
        <CardList people={this.state.people} />
      </div>
    );
  }
}
  

export default App;
