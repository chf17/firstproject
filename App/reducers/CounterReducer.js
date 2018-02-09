//import { Actions } from "../actions"
import index from "./index"

console.log("enter reducer");

 export default  (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT':
     console.log("add " + state);
      return state + 1;
    case 'DECREMENT':
      console.log("minus " + state);
      return state - 1;
    case 'RESET':
      return 0;  
    default:
      console.log("default state");    
      return state;
    }
  }
  
  