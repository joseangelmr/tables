/**
 * Created by joseangelmr on 19/12/16.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import dashboardReducer from '../features/dashboard/redux/reducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    dashboard: dashboardReducer,
});

export default rootReducer;