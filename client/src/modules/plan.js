import { createAction, handleActions } from 'redux-actions'

const GOAL = "plan/GOAL"
const PLAN = "plan/PLAN"

export const makeGoal = (g) => ({ type: GOAL, payload: g });
export const makePlan = (p) => ({ type: PLAN, payload: p });


// 초기 상태 작성하기
const initialState = {
  goalTitle: '',
  planContents: []
}

const goalState = handleActions(
  {
    [GOAL]: (state, action) => ({
      ...state,
      goalTitle: action.payload
    }),
    [PLAN]: (state, action) => ({
      ...state,
      // plan: [...state.plan, ...action.payload]
      // planContents: state.planContents.concat(action.payload)
      planContents: [state.planContents.concat(action.payload)]
    })
  },
  initialState
);

export default goalState;