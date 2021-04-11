import React from "react";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.scss";

import { getAllBeers,  
  getRandomBeer 
} from "./BeerApi";

import Main from "./components/Main";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Details from "./components/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      randomBeer: []
    };
  }
  
  componentDidMount() {
    getAllBeers().then(data => this.setState({allBeers: data}));
    getRandomBeer().then(data => this.setState({randomBeer: data}));
  }

  getMyBeer(id) {
    return this.state.allBeers.find((mybeer) => mybeer._id === id)
  } 
  
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/products">
              <Products data = {this.state.allBeers} />
            </Route>
            <Route exact path="/details/:id">
              {this.state.allBeers.length&&<Details data = {e => this.getMyBeer(e)}/>}
            </Route>
            <Route path="/random/">
              <Details data = {this.state.randomBeer} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
