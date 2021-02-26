import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/store'
import { AddStudent, EditStudent, Student } from '../store/student/types'
import * as actions from '../store/student/actions';
import { config } from '../config';
import axios, { AxiosResponse } from 'axios';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const basePath = `${config.serverUrl}/student/`;

export const addStudent = (params: AddStudent): AppThunk => async dispatch => {
    try {
        const response = await axios.post<any, AxiosResponse<Student>>(basePath, params);

        if (response.status !== 200) {
            throw new Error('Internal server Error')
        }
        if (response.data) {
            dispatch(actions.addStudent(response.data));
        }
        
    } catch (e) {
        console.log(e);
    }

}

export const editStudent = (params: EditStudent): AppThunk => async dispatch => {
    try {
        const response = await axios.post(`${basePath}/${params.id}`, params);

        if (response.status !== 200) {
            throw new Error('Internal server Error')
        }
        if (response.data) {
            dispatch(actions.editStudent(response.data))
        }
        
    } catch (e) {
        console.log(e);
    }
}

export const deleteStudent = (
    id: number
): AppThunk => async dispatch => {

    try {
        const response = await axios.delete(`${basePath}/${id}`, );

        if (response.status !== 200) {
            throw new Error('Internal server Error')
        }

        dispatch(actions.deleteStudent(id)) 
        
    } catch (e) {
        console.log(e);
    }
   
}

export const loadStudents = (): AppThunk => async dispatch => {

    try {
        const res = await axios.get(basePath)

        dispatch(actions.setStudents(res.data));
    } catch (e) {
        console.log('error', e);
    }
   
}
