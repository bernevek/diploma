import { combineReducers } from 'redux';

import computerPolicy from './computerPolicy';
import userPolicy from './userPolicy';

const appReducer = combineReducers({
    computerPolicy,
    userPolicy
});
const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT'){
        state = undefined;
    }
    return appReducer(state, action);
}
export default rootReducer;
