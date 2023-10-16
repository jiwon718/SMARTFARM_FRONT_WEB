import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpComponent from '../../components/user/SignUp';
import { changeName, changeId, changePassword, changePasswordCheck, signupInitialize, clearSignupError, signup } from '../../modules/user/user';

const LogIn = () => {
    const name = useSelector(state => state.user.name);
    const id = useSelector(state => state.user.id);
    const password = useSelector(state => state.user.password);
    const passwordCheck = useSelector(state => state.user.passwordCheck);
    const signupError = useSelector(state => state.user.signupError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onIdChange = useCallback(e => dispatch(changeId(e.target.value)), [dispatch]);
    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);
    const onPasswordCheckChange = useCallback(e => dispatch(changePasswordCheck(e.target.value)), [dispatch]);
    const onSignupErrorClear = useCallback(() => dispatch(clearSignupError()), [dispatch]);

    const onSignUpSuccessClick = () => {
        dispatch(signup({
            name,
            id,
            password,
            passwordCheck
        }));
    };
    const goBack = () => {
        dispatch(signupInitialize());
        navigate(process.env.REACT_APP_LOGIN_PATH);
    };

    useEffect(() => {
        if (signupError === false) {
            dispatch(signupInitialize());
            navigate(process.env.REACT_APP_SIGNUP_SUCCESS_PATH);
        }
    }, [signupError, dispatch, navigate]);

    return (
        <SignUpComponent
            name={name}
            id={id}
            password={password}
            passwordCheck={passwordCheck}
            signupError={signupError}
            onNameChange={onNameChange}
            onIdChange={onIdChange}
            onPasswordChange={onPasswordChange}
            onPasswordCheckChange={onPasswordCheckChange}
            onSignupErrorClear={onSignupErrorClear}
            onSignUpSuccessClick={onSignUpSuccessClick}
            goBack={goBack}
        />
    );
};

export default React.memo(LogIn);