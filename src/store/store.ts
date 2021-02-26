
import { combineReducers } from 'redux'
import studentReducer from './student/reducer';

export const rootReducer = combineReducers({
    student: studentReducer,
})

export type RootState = ReturnType<typeof rootReducer>
