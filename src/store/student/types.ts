


export const Score = ['неуд.', 'уд', 'хор', 'отл']
export interface Student {
    id: number;
    name: string;
    secondname: string;
    surname: string;
    birthdate: string;
    personalscore: number;
}

export type AddStudent = Omit<Partial<Student>, 'id'> & {
    name: string;
    secondname: string;
    surname: string;
};

export interface EditStudent extends Partial<Student> {
    id: number;
}

export interface StudentState {
    students: Student[];
}

export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const SET_STUDNETS = 'SET_STUDNETS';

interface AddStudentAction {
    type: typeof ADD_STUDENT;
    payload: {
        student: Student;
    };
}

interface EditStudentAction {
    type: typeof EDIT_STUDENT;
    payload: {
        student: Student;
    };
}

interface SetStudentAction {
    type: typeof SET_STUDNETS;
    payload: {
        students: Student[];
    };
}

interface DeletStudentAction {
    type: typeof DELETE_STUDENT;
    payload: {
        id: number;
    };
}

export type StudentActionTypes = AddStudentAction | DeletStudentAction | EditStudentAction | SetStudentAction;