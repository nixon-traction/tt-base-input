/* Base Input Features */

/*

  Requirement: Testable ✓
  Requirement: Enable/disable ✓
  Requirement: Permissions (show, hide, disabled) ✓
  Requirement: input validation ✓
  Requirement: Postable (as is, transformations) forms submit ✓
  Requirement: Confirmation (are you sure you want to delete) 
  Requirement: Real time updates ✓
  Requirement: undo redo ✓
  Requirement: keyboard shortcut 
  Requirement: focus/blur formats ✓
  Requirement: localizations (Timezone, $, language) ✓
  Requirement: Accessibility (color, braille, ARIA tags)
  Requirement: no internet 
  Requirement: extensible (hooks)
  Requirement: cross browser


*/


import React, { Component } from 'react';
import './App.css';
import InputComponent from './lib/InputComponent';
import { TranslatedMessage, TranslatedTime, TranslatedDate } from './lib/TranslatedComponent';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);

    var owner = {
      name : "Nixon"
    }

    this.state = {
      data : 56,
      person : {
        name : 'bellson bob',
        age : 15
      },
      score1:{owner:owner},
      score2:{owner:owner},
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

  updateScoreOwner() {
    let score1 = Object.assign({}, this.state.score1);
    score1.owner.name = 'Hey';

    this.setState((prevState, props) => ({
      score1: score1
    }));

  }

  changeToAnotherName(e) {
    let score1 = Object.assign({}, this.state.score1);
    score1.owner.name = e.target.value;

    this.setState({ score1 });
  }

  render() {

    const numRegex = /^[0-9]{4,20}$/ig;

    const {currentTime} = this.props;

    return (
      <div className="App">
        <header className="App-header">

        {/* <Hoc text={'hello'}/>
        <InputComponent validationRegex={/c/ig} model={this.state.data} /> */}
        
        <div className='box'>
          <b><TranslatedMessage id="app.example1" defaultMessage="Example 1" description="example 1 title"/> </b>
          <br/>
          <button onClick={()=> this.updateScoreOwner()}>
            <TranslatedMessage id="app.button1" defaultMessage="Update Score owner" description="button label 1" />
          </button>
          <br/>
          <small>Updates score1 and still updates score2 by using reference</small>
          <br/>
          <input type="text" value={this.state.score1.owner.name} onChange={(e)=> this.changeToAnotherName(e)}/>
          <br/>
          <input type="text" value={this.state.score2.owner.name}/>
          
        </div>
        
        <div className='box'>
          <b>Example 2 </b>
          <br/>
          <small>Validates money > 3 digits regex w/ focus blur method</small>
          <InputComponent 
            validationRegex={numRegex} 
            model={this.state.data} 
            translationId={'input.Example2'}  // this is for translationId *required
            defaultPlaceholder={'default'} // default text
          />
        </div>

        <div className='box'>
          <b>Example 3 </b>
          <br/>
          <small>Timezone localizations</small>
          <br />
          <TranslatedDate value={currentTime} />
          <br />
          <TranslatedTime value={currentTime} />
        </div>

        

       
        </header>
        <br/>
        

        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

App.propTypes = {
  currentTime: PropTypes.object,
};

App.defaultProps = {
  currentTime: new Date(),
};

export default App;

