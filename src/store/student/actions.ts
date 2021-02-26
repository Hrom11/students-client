
import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, SET_STUDNETS, Student, StudentActionTypes } from "./types";

export function setStudents(students: Student[]): StudentActionTypes {
    return {
        type: SET_STUDNETS,
        payload: {
            students,
        }
    }
}

export function editStudent(student: Student): StudentActionTypes {
    return {
        type: EDIT_STUDENT,
        payload: {
            student,
        }
    }
}
export function addStudent(student: Student): StudentActionTypes {
    return {
        type: ADD_STUDENT,
        payload: {
            student,
        }
    }
}

export function deleteStudent(id: number): StudentActionTypes {
    return {
        type: DELETE_STUDENT,
        payload: {
            id,
        }
    }
}