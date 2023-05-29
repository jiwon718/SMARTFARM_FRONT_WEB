import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignUpComponent from '../../components/user/SignUp';
import { changeName, changeId, changePassword, changePasswordCheck } from '../../modules/user/user';

const LogIn = () => {
    const name = useSelector(state => state.user.name);
    const id = useSelector(state => state.user.id);
    const password = useSelector(state => state.user.password);
    const passwordCheck = useSelector(state => state.user.passwordCheck);

    const dispatch = useDispatch();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onIdChange = useCallback(e => dispatch(changeId(e.target.value)), [dispatch]);
    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);
    const onPasswordCheckChange = useCallback(e => dispatch(changePasswordCheck(e.target.value)), [dispatch]);

    return (
        <SignUpComponent
            name={name}
            id={id}
            password={password}
            passwordCheck={passwordCheck}
            onNameChange={onNameChange}
            onIdChange={onIdChange}
            onPasswordChange={onPasswordChange}
            onPasswordCheckChange={onPasswordCheckChange}
        />
    );
};

export default React.memo(LogIn);