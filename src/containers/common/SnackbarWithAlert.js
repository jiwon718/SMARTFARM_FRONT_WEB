import React, { useState, useEffect } from 'react';
import SnackbarWithAlertComponent from '../../components/common/SnackbarWithAlert';

const SnackbarWithAlert = ({ message, clearMessage }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
        setTimeout(() => clearMessage(), 100);
    };

    useEffect(() => {
        if (message !== null && message !== false) {
            setOpen(true);
        }
    }, [message]);

    return (
        <SnackbarWithAlertComponent
            message={message}
            open={open}
            handleClose={handleClose}
        />
    );
}

export default React.memo(SnackbarWithAlert);