import React from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Mypage.css';
import bear from "../../img/bear.png"
import ChangePassword from "./changePassword/ChangePassword"
import MyGoals from "./myGoals/MyGoals"
import MyCharacters from "./myCharacters/MyCharacters"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { persistStore, persistReducer } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import rootReducer from "../../modules"
import logger from 'redux-logger';

function Mypage() {
  const persistConfig = {
    key: 'root',
    storage
  }

  const enhancedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(enhancedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);

  const id = useSelector(state => state.User.id);
  const pw = useSelector(state => state.User.password);

  const viewChangePassword = () => {
    const viewComponent = (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChangePassword id={id} pw={pw}></ChangePassword>
        </PersistGate>
      </Provider>
    );
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  const viewMyGoals = () => {
    const viewComponent = (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyGoals></MyGoals>
        </PersistGate>
      </Provider>
    );
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  const viewMyCharacters = () => {
    const viewComponent = (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyCharacters></MyCharacters>
        </PersistGate>
      </Provider>
    );
    ReactDOM.render(viewComponent, document.getElementsByClassName("mypage_contents")[0]);
  }

  return (
    <div className="mypage_wrap">
      <div className="me">
        <p>현재 상태 : {props.completed < 90 || props.completed >= 0  ? "진화중.." : "진화 완료"} </p>
        
      </div>
      <div>
      <img src={bear} alt=""></img>
      </div>

      <div className="mypage_contents_wrap">
        <div className="mypage_menu">
          <button className="change_pw_btn" onClick={viewChangePassword}>비밀번호 변경</button>
          <button className="my_goals_btn" onClick={viewMyGoals}>나의 연대기</button>
          <button className="my_characters_btn" onClick={viewMyCharacters}>진화의 역사</button>
        </div>

        <div className="mypage_contents">
          컨텐츠!
        </div>

      </div>
    </div>
  );
}

export default Mypage;
