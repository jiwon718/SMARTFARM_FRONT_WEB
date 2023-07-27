import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SettingPasswordComponent from '../../components/setting/SettingPassword';
import { changePassword, changePasswordCheck } from '../../modules/user/user';

const SettingPassword = () => {
    const password = useSelector(state => state.user.password);
    const passwordCheck = useSelector(state => state.user.passwordCheck);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);
    const onPasswordCheckChange = useCallback(e => dispatch(changePasswordCheck(e.target.value)), [dispatch]);

    const onModifyClick = () => {
        console.log('SERVER: 비밀번호 재설정 요청');
        navigate(process.env.REACT_APP_SETTING_PATH);
    };
    const goBack = () => {
        navigate(process.env.REACT_APP_SETTING_PATH);
    };

    useEffect(() => {
        return () => {
            dispatch(changePassword(''));
            dispatch(changePasswordCheck(''));
        };
    }, [dispatch]);

    return (
        <SettingPasswordComponent
            password={password}
            passwordCheck={passwordCheck}
            onPasswordChange={onPasswordChange}
            onPasswordCheckChange={onPasswordCheckChange}
            onModifyClick={onModifyClick}
            goBack={goBack}
        />
    );
};

export default React.memo(SettingPassword);