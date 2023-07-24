import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterPlantComponent from '../../components/smartfarm/RegisterPlant';
import { changeName, changeDay } from '../../modules/smartfarm/plant';

const RegisterPlant = () => {
    const plant = useSelector(state => state.plant);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onDayChange = useCallback(e => dispatch(changeDay(e.target.value)), [dispatch]);

    const onRegisterClick = () => {
        console.log('SERVER: 작물 등록');
        navigate(process.env.REACT_APP_REGISTER_PLANT_SUCCESS_PATH);
    };
    const goBack = () => {
        navigate(-1);
    };

    return (
        <RegisterPlantComponent
            plant={plant}
            onNameChange={onNameChange}
            onDayChange={onDayChange}
            onRegisterClick={onRegisterClick}
            goBack={goBack}
        />
    );
};

export default React.memo(RegisterPlant);