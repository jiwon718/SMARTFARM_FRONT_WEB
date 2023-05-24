import { useSelector, useDispatch } from 'react-redux';
import TextFiledPassword from '../../components/common/TextFieldPassword';
import { changeShowPassword } from '../../modules/common';

const TextFieldPassword = ({ inputLabel }) => {
    const showPassword = useSelector(state => state.common.showPassword);

    const dispatch = useDispatch();

    const onMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <TextFiledPassword
            inputLabel={inputLabel}
            showPassword={showPassword}
            onClickShowPassword={() => dispatch(changeShowPassword())}
            onMouseDownPassword={onMouseDownPassword}
        />
    );
};

export default TextFieldPassword;