import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_en from './translations/en.json';
import messages_de from './translations/de.json';

addLocaleData([...locale_en, ...locale_de]);

const messages = {
    'de' : messages_de,
    'en' : messages_en
}

// const language = navigator.language.split(/[-_]/)[0]; // language without region code
const language = 'en';

ReactDOM.render(<IntlProvider locale={language} messages={messages[language]} timeZone="Asia/Jakarta"><App /></IntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
