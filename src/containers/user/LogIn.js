import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogInComponent from '../../components/user/LogIn';
import { changeId, changePassword } from '../../modules/user/user';

const LogIn = () => {
    const id = useSelector(state => state.user.id);
    const password = useSelector(state => state.user.password);

    const dispatch = useDispatch();

    const onIdChange = useCallback(e => dispatch(changeId(e.target.value)), [dispatch]);
    const onPasswordChange = useCallback(e => dispatch(changePassword(e.target.value)), [dispatch]);

    return (
        <LogInComponent
            id={id}
            password={password}
            onIdChange={onIdChange}
            onPasswordChange={onPasswordChange}
        />
    );
};

export default LogIn;