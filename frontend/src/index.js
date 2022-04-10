import React from 'react';
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import App from './containers/App.js'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'; 

const middleware = [ thunk ];
const root = ReactDOM.createRoot(document.getElementById("root"))
    
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// creating the redux store
const store = createStore( 
    rootReducer, 
    applyMiddleware(thunk) 
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)
