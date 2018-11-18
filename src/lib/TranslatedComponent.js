import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {FormattedDate, FormattedTime} from 'react-intl';


class TranslatedMessage extends Component {
    render() {
        return (
            <FormattedMessage id={this.props.id} defaultMessage={this.props.defaultMessage || ''}  description={this.props.description} />
        );
    }
}

class TranslatedTime extends Component {
    render() {
        return (
            <FormattedTime value={this.props.value} />
        );
    }
}

class TranslatedDate extends Component {
    render() {
        return (
            <FormattedDate value={this.props.value} />
        );
    }
}


export { TranslatedMessage, TranslatedDate, TranslatedTime };