import { combineReducers } from 'redux';

import computerPolicy from './computerPolicy';
import userPolicy from './userPolicy';
import applications from './applications';
import sites from './sites';
import loginMethods from './loginMethods';

const appReducer = combineReducers({
    computerPolicy,
    userPolicy,
    applications,
    sites,
    loginMethods
});
const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT'){
        state = undefined;
    }
    return appReducer(state, action);
}
export default rootReducer;
