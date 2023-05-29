import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIdComponent from '../../components/user/SearchId';
import { changeName, changePhoneNumber } from '../../modules/user/user';

const SearchId = () => {
    const name = useSelector(state => state.user.name);
    const phoneNumber = useSelector(state => state.user.phoneNumber);

    const dispatch = useDispatch();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onPhoneNumberChange = useCallback(e => dispatch(changePhoneNumber(e.target.value)), [dispatch]);

    return (
        <SearchIdComponent
            name={name}
            phoneNumber={phoneNumber}
            onNameChange={onNameChange}
            onPhoneNumberChange={onPhoneNumberChange}
        />
    );
};

export default React.memo(SearchId);