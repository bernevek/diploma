import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store'
import App from './containers/app';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
