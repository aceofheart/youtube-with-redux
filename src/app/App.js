import React, { Component, Fragment } from 'react';

import './App.css';
import { Header } from "./partials/Haeder";
import { Footer } from "./partials/Footer";
import Main from "./containers/MainPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
