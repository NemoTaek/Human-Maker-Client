import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { persistStore,persistReducer } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./modules"
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage
}

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(enhancedReducer,applyMiddleware(logger));
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
