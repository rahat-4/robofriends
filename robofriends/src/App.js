import { Component } from "react";
import Card from "./Card";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component() {
  constructor() {
    super();
    this.state = {
      robots: robots,
    };
  }

  render() {
    
    return (
      <div className="App">
        <h1>ROBOFRIENDS</h1>
        <SearchBox />
        <CardList
          robots={this.state.robots.map((robot) => (
            <Card
              key={robot.id}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          ))}z
        />
      </div>
    );
  }
}

export default App;
