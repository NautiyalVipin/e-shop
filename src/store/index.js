import {applyMiddleware, legacy_createStore as createStore} from "redux" 

import thunk from "redux-thunk" // When an action creator returns a function instead of an object it is further processed by thunk and it takes dispatch as an arguement, it can be a async function as well, and it dispatches the action to the reducer.

import combinedReducer  from "./reducers"

// Redux Store, middleware and thunk for processing middlewares and async tasks and side effects
export const store = createStore(combinedReducer,applyMiddleware(thunk))