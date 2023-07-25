import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import SettingVerifyComponent from '../../components/setting/SettingVerify';
import { changePassword } from '../../modules/user/user';

const SettingVerify = () => {
    const password = useSelector(state => state.user.password);

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);

    const onVerifyClick = () => {
        console.log('SERVER: 해당 비밀번호 인증 요청');
        switch (params.destination) {
            case 'password':
                navigate(process.env.REACT_APP_SETTING_PASSWORD_PATH);
                break;
            case 'smartfarm':
                navigate(process.env.REACT_APP_SETTING_SMARTFARM_PATH);
                break;
            case 'plant':
                navigate(process.env.REACT_APP_SETTING_PLANT_PATH);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        return () => {
            dispatch(changePassword(''));
        };
    }, [dispatch]);

    return (
        <SettingVerifyComponent
            password={password}
            onPasswordChange={onPasswordChange}
            onVerifyClick={onVerifyClick}
        />
    );
};

export default React.memo(SettingVerify);