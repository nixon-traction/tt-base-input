import React, { Component } from 'react';

class BaseComponent extends Component{

    constructor() {
        super();

        this.actionList = {
           change : [],
           blur : [],
           focus : [] 
        }
    }

    addOnChangeActions(type, func) {
        if (!this.actionList.hasOwnProperty(type)) {
            this.actionList[type]=[];
        }
        this.actionList[type].push(func);
    }

    callActions(type, e) {

        let ActionListType = this.actionList[type];

        ActionListType.map((action) => {
            action(e);
        });
    }

    onChange(e) {
        this.callActions('change', e);
    }

    onBlur(e) {
        this.callActions('blur', e);
    }

    onFocus(e) {
        this.callActions('focus', e);
    }
}

export default BaseComponent;