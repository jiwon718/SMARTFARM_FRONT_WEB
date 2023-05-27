import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldPasswordComponent from '../../components/common/TextFieldPassword';
import { changeShowPassword } from '../../modules/common';

const TextFieldPassword = ({ inputLabel }) => {
    const showPassword = useSelector(state => state.common.showPassword);

    const dispatch = useDispatch();

    const onMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <TextFieldPasswordComponent
            inputLabel={inputLabel}
            showPassword={showPassword}
            onClickShowPassword={() => dispatch(changeShowPassword())}
            onMouseDownPassword={onMouseDownPassword}
        />
    );
};

export default React.memo(TextFieldPassword);