import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterPlantComponent from '../../components/smartfarm/RegisterPlant';
import { changeName, changeDay, registerPlantInitialize, registerPlant } from '../../modules/smartfarm/plant';

const RegisterPlant = () => {
    const plant = useSelector(state => state.plant);
    const registerPlantSuccess = useSelector(state => state.plant.registerPlantSuccess);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onDayChange = useCallback(e => dispatch(changeDay(e.target.value)), [dispatch]);

    const onRegisterClick = () => {
        const name = plant.name;
        const day = plant.day;

        if (name === '') {
            dispatch(changeName('새싹이'));
        }

        dispatch(registerPlant({name, day}));
    };
    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (registerPlantSuccess) {
            navigate(process.env.REACT_APP_REGISTER_PLANT_SUCCESS_PATH);
        }

        return () => dispatch(registerPlantInitialize());
    }, [registerPlantSuccess, navigate, dispatch]);

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