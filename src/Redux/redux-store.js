import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import {combineReducers, legacy_createStore as createStore} from "redux"; 
debugger
{/* Бегает по reducers и создает state
    1:ProfileReducer -
*/}
let reducers=combineReducers({
    Profile:ProfileReducer,
    Message:MessageReducer
})
debugger
let store=createStore(reducers);
debugger
export default store;