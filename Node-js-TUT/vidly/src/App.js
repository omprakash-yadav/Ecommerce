import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from "./Components/Movies";
import Customers from './Components/Customers';
import Rentals from './Components/Rentals';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import MovieForm from './Components/MovieForm';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import './App.css';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

