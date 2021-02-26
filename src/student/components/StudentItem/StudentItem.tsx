import { Button, createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Score, Student } from '../../../store/student/types';
import { deleteStudent } from '../../thunks';
import EditStudentItem from '../EditStudentItem/EditStudentItem';

interface StudentItemProps extends Student {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1), 
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const StudentItem = (props: StudentItemProps) => {
    const dispatch = useDispatch();

    const handleRemoveClick = (id: number) => {
        dispatch(deleteStudent(id));
    }
    const classes = useStyles();
    return (
        <Grid container item xs>
            <Paper className={classes.paper}>
                <Typography>Полное имя: <br /> <b>{`${props.surname} ${props.name} ${props.secondname}`}</b></Typography>
                <Typography>Дата рождения: <br /> <b>{new Date(props.birthdate).toLocaleDateString()}</b></Typography>
                <Typography>Оценка: <br /> <b>{Score[props.personalscore]}</b></Typography>
               
                <Button onClick={() => handleRemoveClick(props.id)} >Удалить</Button>
                <EditStudentItem {...props} />
            </Paper>
        </Grid>
    )
}

