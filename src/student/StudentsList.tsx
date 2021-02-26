import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { AddStudent } from './components/AddStudentModal';
import { StudentItem } from './components/StudentItem/StudentItem';
import { loadStudents } from './thunks';
import './studentList.scss';
import Grid from '@material-ui/core/Grid/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import { Box, makeStyles, Theme } from '@material-ui/core';


interface StudentsListProps extends ReturnType<typeof mapStateToProps> {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const StudentsList = (props: StudentsListProps) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(loadStudents());
    }, [dispatch])

    return (
        <div className="student-list">
            <Box display="flex" justifyContent="space-between">
                <h1 >Список студентов</h1>
                <AddStudent />
            </Box>
           
            <Grid 
                container 
                spacing={2} 
                className={classes.root}   
                alignItems="center"
                >
            
            {props.students.map(item =>
                <StudentItem key={item.id} {...item} />)}

            </Grid>
            
            
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    students: state.student.students,
})

export default connect(mapStateToProps)(StudentsList)