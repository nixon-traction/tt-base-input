

PageContext = {
    ajax : ajax,
    undo : undo,
    connectionMonitor : connectionMonitor,
    keyboardEventMonitor : keyboardEventMonitor,
}


class ajax() {

    let pendingApi = [];

    event handling ConnectionManager.NetworkListener() {
            if (isOnline()) {
                sendTheBuild();
            }
        }

    callRequest(options) {
        try {
            $.ajax({...});
        } catch() {
            pendingApi.push(options);
            HandleErrorClass.addErrors(options.error);
        }
    }

    sendRequest(options) {
        if(online()) {
           callRequest(options);
        } else { // if offline or no connection/reconnecting
            buildQue(options);
        }
    }

    buildQue(options) {
        pendingApi.push(options)
    }


    sendTheBuild() {
        pendingApi.map((option)=>{
            callRequest(option)
        });
        
    }


}



class UndoContext {

    let queuedList = [{f : ()=>(), e : ''}];
    let pointer = 0;


    undo() {
        queuedList[pointer].undo();
        pointer = Math.max(0, pointer - 1);
        
    }    

    redo() {
        if (pointer < pointer.length -1) {
            pointer += 1;
            queuedList[pointer].execute();
        }   
    }
    
    addUndoable(executeFunc, undoFunc) {
        queuedList.splice(pointer + 1);
        executeFunc();
        pushToQueue(executeFunc, undoFunc);
    } 

    pushToQueue(executeFunc, undoFunc) {
        // do some pushing to stack
        queuedList.push({...});
        pointer += 1;
    }
}


class ConnectionManager(options) {
    // networkLibrary(options);

    NetworkListener() {
        return otherNetworkLibrary(options);
    }
    
}




class InputValidation {

}

class TextInputComponent extends BaseInputComponent {
    render() {
        return (
            <input onChange={(e) => this.onChange(e)} onBlur={} onFocus={} />
        )
    }
}

class BaseInputComponent extends BaseComponent {

}


class BaseComponent extends Component{

    constructor() {
        super();

        this.actionList = {
           change : [],
           blur : [],
           focus : [] 
        }
    }

    validation() {

    }

    addOnChangeActions(type, func) {
        if (!actionList.hasOwnProperty(type)) {
            this.actionList[type]=[];
        }
        this.actionList[type].push(func);
    }

    callActions(type, e) {

        let ActionListType = actionList[type];

        ActionListType.map((action) => {
            action(e);
        });
    }

    onChange(e) {
        callActions('change', e);
    }

    onBlur(e) {
        callActions('blur', e);
    }

    onFocus(e) {
        callActions('focus', e);
    }
}


/// Validation 
import React, { Component } from 'react';
import './App.css';

function Stringify(str) {

  let types = {
    'undefined' : '',
    'null' : ''
  };

  return String(types[str] || str);
}

class InputComponent extends BaseComponent {

  IsValid() {
    return RegExp(this.getRegex).test(this.state.val);
  }

  render() {

    const Hoc = (props) => (<h1>{props.text}</h1>);

    return (
      <div className="App">
        <header className="App-header">
        <Hoc text={'hello'}/>
        <div invalid={!this.IsValid()}>
          <input value={this.state.val}/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
