import { combineReducers } from "redux"
 
import counter from "./CounterReducer.js"
import timer from "./TimerReducer"

console.log("index enter combinereducer");

export default combineReducers({
    counter,
    timer
})
