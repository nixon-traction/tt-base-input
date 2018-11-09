import React, { Component } from 'react';
import './App.css';
import InputComponent from './lib/InputComponent';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : 56
    }
  }
  IsValid() {
    return false;
  }

  render() {

    const Hoc = (props) => (<h1>{props.text}</h1>);

    return (
      <div className="App">
        <header className="App-header">
        <Hoc text={'hello'}/>
        <InputComponent validationRegex={/c/ig} model={this.state.data} />

        </header>
      </div>
    );
  }
}

export default App;
