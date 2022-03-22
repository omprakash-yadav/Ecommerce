import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NaveBar from './Components/navebar';
import Products from './Components/products'
//import NaveBar from './../../react-app/src/Components/NaveBar';


class App extends Component {

  render() {
    return (
      <div>
        <NaveBar>
          <div className="content"></div>
          <Route path="/products" component={Products}></Route>

        </NaveBar>
      </div>
    );
  }
}

export default App;