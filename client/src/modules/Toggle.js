import { createAction, handleActions } from 'redux-actions'

const LOGIN = "Toggle/LOGIN";
const LOGOUT = "Toggle/LOGOUT";
const REMEMBERID = "Toggle/REMEMBERID"
const FORGOTID = "Toggle/FORGOTID"

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const rememberid = createAction(REMEMBERID);
export const forgotid = createAction(FORGOTID);

// 초기 상태 작성하기
const initialState = {
  isLogin: false,
  isRememberId: false
}

const toggle = handleActions(
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

export default toggle;