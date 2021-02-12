import store from './store';
import {bugAdded,bugResolved} from "./actions";

store.dispatch((bugAdded("bug 1")))
store.dispatch(bugResolved(1))


// store.dispatch(bugAdded(" bug 1")
// )
// store.dispatch(bugResolved(1))
console.log(store.getState());
