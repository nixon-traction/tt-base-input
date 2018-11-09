import React, { Component } from 'react';
import './App.css';
import InputComponent from './lib/InputComponent';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : 56,
      person : {
        name : 'bellson bob',
        age : 15
      }
    }
  }
  IsValid() {
    return false;
  }

  changeName(e) {

    let person = Object.assign({}, this.state.person);
    person.name = e.target.value;

    this.setState({ person });
  }

  changeToAnotherName() {
    let person = Object.assign({}, this.state.person);
    person.name = 'Hey';

    this.setState({ person });
  }

  render() {

    const Hoc = (props) => (<h1>{props.text}</h1>);

    return (
      <div className="App">
        <header className="App-header">
        {/* <Hoc text={'hello'}/>
        <InputComponent validationRegex={/c/ig} model={this.state.data} /> */}
        <button onClick={()=> this.changeToAnotherName()} />
        <PersonInput person={this.state.person} changeName={this.changeName.bind(this)} />
        <PersonInput person={this.state.person} />
        </header>
      </div>
    );
  }
}

export default App;


class PersonInput extends Component {

  // constructor(props) {
  //   super(props);

  //   debugger;
  // }

  render() {
    return (
      <>
        <label>Name</label>
        <input type="text" value={this.props.person.name} onChange={(e)=> this.props.changeName(e)}/>

        <label>age</label>
        <input type="text" value={this.props.person.age}/>
      </>
    );
  }

}
