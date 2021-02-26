import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@material-ui/core"
import React from "react"
import { Score } from "../../store/student/types"

interface ModalFormProps {
    show: boolean;
    dialogTitle: string;
    handleShowClick: () => void;
    showButtonTitle: string;
    handleOkClick: () => void;
    okButtonTitle: string;
    okDisabled?: boolean;

    form: {
        name: string;
        surname: string;
        secondname: string;
        birthdate: string;
        personalscore: number;
    }
    setForm: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const ModalForm = (props: ModalFormProps) => {
    const {
        show,
        handleShowClick,
        handleOkClick,
        form,
        setForm,
        okDisabled,
        okButtonTitle,
        showButtonTitle,
        dialogTitle,
    } = props;

    const { birthdate, personalscore, surname, secondname, name } = form;

    return (
        <>
            <Button onClick={handleShowClick}>{showButtonTitle}</Button>

            <Dialog open={show} onClose={handleShowClick} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Имя"
                        type="text"
                        value={name}
                        onChange={setForm}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="surname"
                        label="Фамилия"
                        name="surname"
                        type="text"
                        value={surname}
                        onChange={setForm}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="secondname"
                        name="secondname"
                        label="Отчество"
                        value={secondname}
                        onChange={setForm}
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="birthdate"
                        name="birthdate"
                        label="Дата рождения"
                        type="date" 
                        value={birthdate}
                        onChange={setForm}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <TextField
                        id="personalscore"
                        name="personalscore"
                        select
                        margin="dense"
                        label="Оценка"
                        value={personalscore}
                        onChange={setForm}
                        fullWidth
                        required
                    >
                        {Score.map((item, index) =>
                            <MenuItem key={item} value={index}>
                                {item}
                            </MenuItem>
                        )}
                        
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleShowClick} color="primary">
                        Закрыть
                </Button>
                    <Button onClick={handleOkClick} color="primary" disabled={okDisabled}>
                        {okButtonTitle}
                    </Button>
                </DialogActions>

            </Dialog>
        </>

    )
}