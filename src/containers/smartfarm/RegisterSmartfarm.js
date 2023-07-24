import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterSmartfarmComponent from '../../components/smartfarm/RegisterSmartfarm';
import { changeSmartfarmNumber, changeSuccess } from '../../modules/smartfarm/smartfarm';

const RegisterSmartfarm = () => {
    const smartfarm = useSelector(state => state.smartfarm);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSmartfarmNumberChange = useCallback(e => dispatch(changeSmartfarmNumber(e.target.value)), [dispatch]);
    const onSuccessChange = useCallback(() => dispatch(changeSuccess()), [dispatch]);

    const onRegisterClick = () => {
        console.log('SERVER: 스마트팜 등록 요청');
        navigate(process.env.REACT_APP_REGISTER_SMARTFARM_SUCCESS_PATH);
    };
    const goBack = () => {
        navigate(-1);
    };

    return (
        <RegisterSmartfarmComponent
            smartfarm={smartfarm}
            onSmartfarmNumberChange={onSmartfarmNumberChange}
            onSuccessChange={onSuccessChange}
            onRegisterClick={onRegisterClick}
            goBack={goBack}
        />
    );
};

export default React.memo(RegisterSmartfarm);