
import { StudentActionTypes, ADD_STUDENT, DELETE_STUDENT, StudentState, EDIT_STUDENT, SET_STUDNETS } from "./types";

const initialState: StudentState = {
    students: [],
}

const studentReducer = (state =  initialState, action: StudentActionTypes): StudentState => {

    switch (action.type) {
        case SET_STUDNETS: 
            return {
                ...state,
                students: action.payload.students
            }
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload.student]
            }
        case EDIT_STUDENT:
            return {
                ...state,
                students: state.students.map(item => item.id === action.payload.student.id ? 
                    { ...item, ...action.payload.student } : 
                    item
                )
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default studentReducer;