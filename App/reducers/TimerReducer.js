import { action } from "../actions"
import index from "./index"

console.log("TimerReducer");

const initialState = {
    timer:null,
    countertimer:0,
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: 0
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "RESET_TIMER":
        return {
          ...state,
          baseTime: 0,
          startedAt: state.startedAt ? action.now : undefined,
          stoppedAt: state.stoppedAt ? action.now : undefined
        };
        case "START_TIMER":
        console.log("start timer ************** ")
          return {
            ...state,
            baseTime: action.baseTime,
            startedAt: action.now,
            stoppedAt: undefined
          };
        case "TIMER_TICK":
        console.log("****** timer tick ************** "+state.countertimer)
          return {
            ...state,
            baseTime: action.baseTime,
            startedAt: action.now,
            stoppedAt: undefined,
            countertimer:state.countertimer+1
         };       


      case "STOP_TIMER":
      console.log("stop timer **************")
   
        return {
          ...state,
          countertimer:0,
          stoppedAt: action.now
        }
      default:
        return state;
    }
  }