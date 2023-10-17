import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unshowSnackbar } from '../../modules/common';
import SnackbarWithAlertComponent from '../../components/common/SnackbarWithAlert';

const SnackbarWithAlert = () => {
    const open = useSelector(state => state.common.showSnackbar);
    const errorMessage = useSelector(state => state.common.errorMessage);

    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(unshowSnackbar());
    };

    return (
        <SnackbarWithAlertComponent
            message={errorMessage}
            open={open}
            handleClose={handleClose}
        />
    );
}

export default React.memo(SnackbarWithAlert);