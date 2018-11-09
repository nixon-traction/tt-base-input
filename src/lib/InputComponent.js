import BaseComponent from './BaseComponent';
import React from 'react';
import Stringify from './Stringify';

class InputComponent extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      displayValue : props.model,
      modelValue : props.model,
      validationRegex : RegExp(props.validationRegex)|| RegExp(),
      isFocused : false
    }

  }

  setFocus() {
    this.setState({isFocused : true});
  }

  unFocus() {
    this.setState({isFocused : false});
    this.transformToDisplayValue(this.state.modelValue);
  }
  

  getRenderValue() {
    // when focused should show displayValue
    if (this.state.isFocused) {
      return this.transformToModel(this.state.modelValue);
    }

    return this.transformToDisplayValue(this.state.modelValue);
    
  }

  transformToModel(val) {
    return this.state.modelValue;
  }

  transformToDisplayValue(val) {
    let prefix = '$'; // Deal with this later
    return `${prefix}${val}`;
  }

  getValidationRegex() {
    return RegExp(this.state.validationRegex);
  }

  IsValid() {
    return this.getValidationRegex().test(this.state.val);
  }

  render() {
    return (
      <div valid={Stringify(this.IsValid()) || 'false'}>
        <input value={this.getRenderValue()} onChange={(e)=>this.setState({ modelValue : e.target.value})} onFocus={(e) => this.setFocus(e)} onBlur={(e) => this.unFocus()} />
      </div>
    );
  }
}

export default InputComponent;
  