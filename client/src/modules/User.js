import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의하기
// 액션 타입은 대문자로 작성하고
// 문자열 내용은 모듈명/액션 이름 형식으로 작성한다.
const USERID = "User/USERID";
const USERPASSWORD = "User/USERPASSWORD";

// export const login = () => ({ type: LOGIN });
// export const logout = () => ({ type: LOGOUT });
export const userid = (id) => createAction({ type: USERID, payload: id });
export const userpassword = (password) => ({ type: USERPASSWORD, payload: password });

// 초기 상태 작성하기
const initialState = {
  id: '',
  password: ''
}

// // Reducer 함수 만들기
// function loginStatus(state = initialState, action) {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         ...state,
//         isLogin: true
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         isLogin: false
//       };
//     default:
//       return state;
//   }
// }
// export default loginStatus;

// 하지만 redux-action을 설치하면 다음으로 바뀔 수 있다.
const userStatus = handleActions(
  {
    [USERID]: (state, action) => ({
      ...state,
      id: action.payload
    }),
    [USERPASSWORD]: (state, action) => ({
      ...state,
      password: action.payload
    })
  },
  initialState
);

export default userStatus;