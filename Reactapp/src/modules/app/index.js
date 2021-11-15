import * as actions from './actions';
import reducer from './reducer'
import * as selectors from './selectors';

export { default as App } from "./components/App";
const appredux = { actions, reducer, selectors }
export default appredux;