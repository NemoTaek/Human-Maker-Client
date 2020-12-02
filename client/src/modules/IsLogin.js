// 액션 타입 정의하기
// 액션 타입은 대문자로 작성하고
// 문자열 내용은 모듈명/액션 이름 형식으로 작성한다.
const LOGIN = "IsLogin/LOGIN";
const LOGOUT = "IsLogin/LOGOUT";

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });


// 또는 npm install --save redux-actions 설치 후 다음처럼 작성
// import {createAction} from 'redux-actions'

// export const login = createAction(LOGIN);
// export const logout = createAction(LOGOUT);


// 초기 상태 작성하기
const initialState = {
  isLogin: false
}

// Reducer 함수 만들기
function loginStatus(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
}
export default loginStatus;

// 하지만 redux-action을 설치하면 다음으로 바뀔 수 있다.
// const loginStatus = handleActions(
//   {
//     [LOGIN]: (status, action) => ({
//       isLogin: true
//     }),
//     [LOGOUT]: (status, action) => ({
//       isLogin: false
//     })
//   },
//   initialState
// );