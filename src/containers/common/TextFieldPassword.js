import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextFieldPasswordComponent from '../../components/common/TextFieldPassword';
import { changeShowPassword } from '../../modules/common';

const TextFieldPassword = ({ inputLabel, disabled, value, onChange, id, error }) => {
    const showPassword = useSelector(state => state.common.showPassword);

    const dispatch = useDispatch();

    const onMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <TextFieldPasswordComponent
            id={id}
            error={error}
            inputLabel={inputLabel}
            disabled={disabled}
            value={value}
            onChange={onChange}
            showPassword={showPassword}
            onClickShowPassword={() => dispatch(changeShowPassword())}
            onMouseDownPassword={onMouseDownPassword}
        />
    );
};

export default React.memo(TextFieldPassword);