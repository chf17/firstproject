import { createStore } from 'redux';
import reducers from "../reducers"

console.log("enter store ");
/*
export default initialState => {
    console.log("create store");
    const store = createStore(reducers);
    return store;       

}*/
export default store = createStore(reducers);