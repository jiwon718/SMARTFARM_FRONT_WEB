import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogInComponent from '../../components/user/LogIn';
import { changeId, changePassword, clearLoginError, loginInitialize, login } from '../../modules/user/user';

const LogIn = () => {
    const id = useSelector(state => state.user.id);
    const password = useSelector(state => state.user.password);
    const loginError = useSelector(state => state.user.loginError);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onIdChange = useCallback(e => dispatch(changeId(e.target.value)), [dispatch]);
    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);
    const onLoginErrorClear = useCallback(() => dispatch(clearLoginError()), [dispatch]);

    const onLogInClick = () => {
        dispatch(login({
            id,
            password
        }));
    };
    const goVerify = () => {
        dispatch(loginInitialize());
        navigate(process.env.REACT_APP_VERIFY_PATH);
    };

    useEffect(() => {
        if (loginError === false) {
            dispatch(loginInitialize());
            navigate(process.env.REACT_APP_HOME_PATH);
        }
    }, [loginError, navigate, dispatch]);

    return (
        <LogInComponent
            id={id}
            password={password}
            loginError={loginError}
            onIdChange={onIdChange}
            onPasswordChange={onPasswordChange}
            onLoginErrorClear={onLoginErrorClear}
            onLogInClick={onLogInClick}
            goVerify={goVerify}
        />
    );
};

export default React.memo(LogIn);