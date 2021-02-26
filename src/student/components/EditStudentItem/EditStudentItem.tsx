import React from "react";
import { useDispatch } from "react-redux";
import { Student } from "../../../store/student/types";
import { editStudent } from "../../thunks";
import { ModalForm } from "../ModalForm";

interface EditStudentItemProps extends Student {
}

const EditStudentItem = (props: EditStudentItemProps) => {
    const dispatch = useDispatch();

    const [form, setForm] = React.useState({
        name: props.name,
        surname: props.surname,
        secondname: props.secondname,
        birthdate: (new Date(props.birthdate)).toISOString().split('T')[0],
        personalscore: props.personalscore,
    })

    const {
        birthdate,
        name,
        personalscore,
        surname,
        secondname,
    } = form;

    const [show, setShow] = React.useState(false);
    const handleShowClick = () => {
        setShow(!show);
    }

    const handleEditClick = () => {
        dispatch(editStudent({
            id: props.id,
            birthdate: birthdate ?  (new Date(birthdate)).toISOString().split('T')[0] : undefined,
            name: name,
            secondname: secondname,
            surname: surname,
            personalscore: personalscore
        }))

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
            handleOkClick={handleEditClick}
            handleShowClick={handleShowClick}
            okButtonTitle="Сохранить"
            showButtonTitle="Редактировать студента"
            dialogTitle="Редактировать"
    />
    )
}

export default EditStudentItem;