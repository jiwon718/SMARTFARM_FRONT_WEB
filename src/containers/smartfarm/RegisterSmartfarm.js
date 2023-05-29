import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegisterSmartfarmComponent from '../../components/smartfarm/RegisterSmartfarm';
import { changeSmartfarmNumber, changeSuccess } from '../../modules/smartfarm/smartfarm';

const RegisterSmartfarm = () => {
    const smartfarm = useSelector(state => state.smartfarm);

    const dispatch = useDispatch();

    const onSmartfarmNumberChange = useCallback(e => dispatch(changeSmartfarmNumber(e.target.value)), [dispatch]);
    const onSuccessChange = useCallback(() => dispatch(changeSuccess()), [dispatch]);

    return (
        <RegisterSmartfarmComponent
            smartfarm={smartfarm}
            onSmartfarmNumberChange={onSmartfarmNumberChange}
            onSuccessChange={onSuccessChange}
        />
    );
};

export default React.memo(RegisterSmartfarm);