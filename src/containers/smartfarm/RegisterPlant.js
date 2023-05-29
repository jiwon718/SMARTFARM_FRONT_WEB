import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegisterPlantComponent from '../../components/smartfarm/RegisterPlant';
import { changeName, changeDay } from '../../modules/smartfarm/plant';

const RegisterPlant = () => {
    const plant = useSelector(state => state.plant);

    const dispatch = useDispatch();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onDayChange = useCallback(e => dispatch(changeDay(e.target.value)), [dispatch]);

    return (
        <RegisterPlantComponent
            plant={plant}
            onNameChange={onNameChange}
            onDayChange={onDayChange}
        />
    );
};

export default React.memo(RegisterPlant);