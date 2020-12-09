import { createAction, handleActions } from 'redux-actions'

const LOGIN = "login/LOGIN";
const LOGOUT = "login/LOGOUT";
const REMEMBERID = "login/REMEMBERID"
const FORGOTID = "login/FORGOTID"

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const rememberid = createAction(REMEMBERID);
export const forgotid = createAction(FORGOTID);

// 초기 상태 작성하기
const initialState = {
  isLogin: false,
  isRememberId: false
}

const loginState = handleActions(
  {
    [LOGIN]: (state, action) => ({
      ...state,
      isLogin: true
    }),
    [LOGOUT]: (state, action) => ({
      ...state,
      isLogin: false
    }),
    [REMEMBERID]: (state, action) => ({
      ...state,
      isRememberId: true
    }),
    [FORGOTID]: (state, action) => ({
      ...state,
      isRememberId: false
    })
  },
  initialState
);

export default loginState;