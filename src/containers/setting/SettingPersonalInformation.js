import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SettingPersonalInformationComponent from '../../components/setting/SettingPersonalInformation';
import { changeName, changePhoneNumber, changePassword } from '../../modules/user/user';

const SettingPersonalInformation = () => {
    const name = useSelector(state => state.user.name);
    const phoneNumber = useSelector(state => state.user.phoneNumber);
    const password = useSelector(state => state.user.password);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onPhoneNumberChange = useCallback(e => dispatch(changePhoneNumber(e.target.value)), [dispatch]);
    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);

    const onModifyClick = () => {
        console.log('SERVER: 해당 계정 정보 수정 요청');
        navigate(process.env.REACT_APP_SETTING_PATH);
    };
    const onOpenClick = () => {
        setOpen(true);
    };
    const onYesClick = () => {
        console.log('SERVER: 해당 계정 탈퇴 요청');
        navigate(process.env.REACT_APP_SETTING_PATH);
    };
    const onNoClick = () => {
        dispatch(changePassword(''));
        setOpen(false);
    };
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        return () => {
            dispatch(changeName(''));
            dispatch(changePhoneNumber(''));
            dispatch(changePassword(''));
        };
    }, [dispatch]);

    return (
        <SettingPersonalInformationComponent
            name={name}
            phoneNumber={phoneNumber}
            password={password}
            open={open}
            onNameChange={onNameChange}
            onPhoneNumberChange={onPhoneNumberChange}
            onPasswordChange={onPasswordChange}
            onModifyClick={onModifyClick}
            onOpenClick={onOpenClick}
            onYesClick={onYesClick}
            onNoClick={onNoClick}
            goBack={goBack}
        />
    );
};

export default React.memo(SettingPersonalInformation);