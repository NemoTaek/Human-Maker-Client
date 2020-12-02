import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './modules';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import store from "./store/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// react-redux에서는 Provider를 사용함으로써 props를 올리고 내려받는짓을 안해도 된다고 한다.
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);