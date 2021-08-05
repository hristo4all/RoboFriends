import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  /*constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''

        }
    }*/
  /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots:users})); 
    }*/
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setRobots(users)});
      //console.log(robots, searchField);
     
  }, [])//replicate componentDidMount

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filterRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });
  //if robots is empty return h1 else display robots
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
export default App;
