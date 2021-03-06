import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormInput from '../components/form';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Tickets() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="Tickets" onClick={handleOpen}>Entradas</button>

            <Modal
                className={classes.modal}
                disablePortal
                open={open}
                onClose={handleClose}
            >
                <div className="PopUp">
                    <FormInput
                        onClick={handleClose}
                    />
                </div>
            </Modal>
        </div>
    )
}