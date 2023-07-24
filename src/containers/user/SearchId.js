import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchIdComponent from '../../components/user/SearchId';
import { changeName, changePhoneNumber } from '../../modules/user/user';

const SearchId = () => {
    const name = useSelector(state => state.user.name);
    const phoneNumber = useSelector(state => state.user.phoneNumber);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onPhoneNumberChange = useCallback(e => dispatch(changePhoneNumber(e.target.value)), [dispatch]);

    const goBack = () => {
        navigate(-1);
    };
    const goNext = () => {
        console.log('SERVER: 이름과 전화번호로 아이디 찾기');
        navigate(process.env.REACT_APP_SEARCH_ID_SUCCESS_PATH);
    };

    return (
        <SearchIdComponent
            name={name}
            phoneNumber={phoneNumber}
            onNameChange={onNameChange}
            onPhoneNumberChange={onPhoneNumberChange}
            goBack={goBack}
            goNext={goNext}
        />
    );
};

export default React.memo(SearchId);