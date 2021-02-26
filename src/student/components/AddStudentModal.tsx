import React from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../thunks";
import { ModalForm } from "./ModalForm";

export const AddStudent = () => {
    const dispatch = useDispatch();

    const initialState = {
        name: '',
        surname: '',
        secondname: '',
        birthdate: '',
        personalscore: 0,
    }

    const [form, setForm] = React.useState(initialState);

    const [show, setShow] = React.useState(false);

    const {
        birthdate,
        name,
        personalscore,
        surname,
        secondname,
    } = form;

    const handleShowClick = () => {
        setShow(!show);
    }


    const addDisabled = !birthdate.length || !name.length || !surname.length || !secondname.length

    const handleSaveClick = () => {
        dispatch(addStudent({
            birthdate: !!birthdate ?  (new Date(birthdate)).toISOString().split('T')[0] : undefined,
            name,
            secondname,
            surname,
            personalscore,
        }))
        setForm(initialState);
        setShow(!show);
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        setForm({
            ...form,
            [event.target.name]: value
        });
    }

    return (
        <ModalForm 
            show={show}
            form={form}
            setForm={handleFormChange}
            handleOkClick={handleSaveClick}
            handleShowClick={handleShowClick}
            okButtonTitle="Добавить"
            showButtonTitle="Добавить студента"
            dialogTitle="Добавить студента"
            okDisabled={addDisabled}
        />
    )
}

