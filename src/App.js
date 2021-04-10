import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Details from "./components/Details";

import axios from "axios";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: [],
    };
  }
  
  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      const beer = res.data;
      this.setState({ beer });
    });
  }
  
  getBeer(id) {
    return this.state.beer.find((mybeer) => mybeer._id === id)
  }

  getAllBeer() {
    return this.state.beer;
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
              <Products beerdata={this.getAllBeer()} />
            </Route>
            <Route exact path="/details/:id">
              {this.state.beer.length&&<Details onebeerdata = {e => this.getBeer(e)}/>}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
