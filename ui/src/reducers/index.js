import { combineReducers } from 'redux';

import computerPolicy from './computerPolicy';
import userPolicy from './userPolicy';
import applications from './applications';
import sites from './sites';
import services from './services';
import users from './users';
import computers from './computers';
import reports from './reports';

const appReducer = combineReducers({
    computerPolicy,
    userPolicy,
    applications,
    sites,
    services,
    users,
    computers,
    reports
});
const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT'){
        state = undefined;
    }
    return appReducer(state, action);
}
export default rootReducer;
