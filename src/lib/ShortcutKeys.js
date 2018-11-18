import React, { Component } from 'react';
import {HotKeys} from 'react-hotkeys';

class ShortcutKeys extends Component {
    render() {
        return (
            <HotKeys keyMap={this.props.keyMap} handlers={this.props.handlers}>
              {this.props.children}
            </HotKeys>
        );
    }
}

export default ShortcutKeys;