import { createAction, handleActions } from "redux-actions"

const LOGIN = 'isLogin/LOGIN';
const LOGOUT = 'isLogin/LOGOUT';


export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)


const initialState ={
    isLogin : false,  
}
// console.log(initialState)
const loginState = handleActions({
    [LOGIN] : (state, action) => ({
       ...state, isLogin: true
    }),
    [LOGOUT] : (state, action) => ({
        ...state, isLogin: false
    })
},initialState)

export default loginState;