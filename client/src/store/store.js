// applyMiddleware에 미들웨어 형태의 redux 개발도구를 추가한다.
// redux-logger로 store의 변화 값을 확인할 수 있다.
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../modules';
// redux-persist는 새로고침을 해도 상태들이 초기화되지 않는다.(상태값을 지속적으로 저장한다.)
import { persistReducer } from 'redux-persist';
// type of store
// localstorage 경로
// : import storage from 'redux-persist/lib/storage'
// Redux-persist한테 나는 localstorage를 사용할 것이라고 알려주는것

// sessiongstorage 경로
// : import storageSession from 'redux-persist/lib/storage/session';
// Redux-persist한테 나는 sessionstorage를 사용할 것이라고 알려주는것
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
  key: 'root',
  // 위에 import 한 성격의 storage를 지정해준다.
  storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(enhancedReducer, applyMiddleware(logger));