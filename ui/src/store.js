import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux'



// const initialState = {};
// const enhancers = [];
// const middleware = [
//     thunk,
//     routerMiddleware(history)
// ];

// if (process.env.NODE_ENV === 'development') {
//     const devToolsExtension = window.devToolsExtension;
//
//     if (typeof devToolsExtension === 'function') {
//         enhancers.push(devToolsExtension());
//     }
// }
//
// const composedEnhancers = compose(
//     applyMiddleware(...middleware),
//     ...enhancers
// );

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const history = createHashHistory();
// const store = createStore(
//     connectRouter(history)(rootReducer),
//     initialState,
//     composedEnhancers
// );

export default store;
