import React, { Component } from "react";
import "./App.css";
import NewMemeForm from "./NewMemeForm";
import MemeList from "./MemeList"


class App extends Component {

  render() {
    return (
      <div className='App'>
        <NewMemeForm />
        <MemeList />
      </div>
    );
  }
}

export default App;
