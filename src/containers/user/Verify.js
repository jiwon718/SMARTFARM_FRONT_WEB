import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VerifyComponent from '../../components/user/Verify';
import { changeName, changePhoneNumber } from '../../modules/user/user';

const Verify = () => {
    const name = useSelector(state => state.user.name);
    const phoneNumber = useSelector(state => state.user.phoneNumber);

    const dispatch = useDispatch();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onPhoneNumberChange = useCallback(e => dispatch(changePhoneNumber(e.target.value)), [dispatch]);

    return (
        <VerifyComponent
            name={name}
            phoneNumber={phoneNumber}
            onNameChange={onNameChange}
            onPhoneNumberChange={onPhoneNumberChange}
        />
    );
};

export default React.memo(Verify);