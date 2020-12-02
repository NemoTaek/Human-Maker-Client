// 프로젝트 크기에 따라 modules 폴더에는 수많은 reducer가 존재하게 될 것이다.
// 하지만 리덕스 store에는 하나의 reducer만 연결되어야 하므로 이를 통합해야 한다.
// 그래서 combineReducers를 사용한다.

import { combineReducers } from "redux";
import IsLogin from "./IsLogin";

const rootReducer = combineReducers({
  IsLogin
  // 리듀서가 추가되면 여기에 추가로 작성
});

export default rootReducer;