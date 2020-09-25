import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import doctors from './doctors';

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        doctors   

    });