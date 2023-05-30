import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppBarComponent from '../../components/common/AppBar';
import { changeLogOut } from '../../modules/user/user';

const AppBar = ({ text, children }) => {
    const dispatch = useDispatch();

    const onLogOutChange = useCallback(() => dispatch(changeLogOut()), [dispatch]);

    return (
        <AppBarComponent
            text={text}
            children={children}
            onLogOutChange={onLogOutChange}
        />
    );
};

export default AppBar;