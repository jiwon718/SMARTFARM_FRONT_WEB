import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchPasswordComponent from '../../components/user/SearchPassword';
import { changeName, changeId, changePhoneNumber } from '../../modules/user/user';

const SearchPassword = () => {
    const name = useSelector(state => state.user.name);
    const id = useSelector(state => state.user.id);
    const phoneNumber = useSelector(state => state.user.phoneNumber);

    const dispatch = useDispatch();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onIdChange= useCallback(e => dispatch(changeId(e.target.value)), [dispatch]);
    const onPhoneNumberChange = useCallback(e => dispatch(changePhoneNumber(e.target.value)), [dispatch]);

    return (
        <SearchPasswordComponent
            name={name}
            id={id}
            phoneNumber={phoneNumber}
            onNameChange={onNameChange}
            onIdChange={onIdChange}
            onPhoneNumberChange={onPhoneNumberChange}
        />
    );
};

export default React.memo(SearchPassword);