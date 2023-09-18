import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SettingPlantComponent from '../../components/setting/SettingPlant';
import { changeExist, changeName, changeDay } from '../../modules/smartfarm/plant';

const SettingPlant = () => {
    const plant = useSelector(state => state.plant);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = useCallback(e => dispatch(changeName(e.target.value)), [dispatch]);
    const onDayChange = useCallback(e => dispatch(changeDay(e.target.value)), [dispatch]);

    const onModifyClick = () => {
        console.log('SERVER: 작물 수정 요청');
    };
    const onOpenClick = () => {
        setOpen(true);
    };
    const onYesClick = () => {
        console.log('SERVER: 작물 삭제 요청');
        dispatch(changeExist());
        navigate(process.env.REACT_APP_REMOVE_PLANT_SUCCESS_PATH);
    };
    const onNoClick = () => {
        setOpen(false);
    };
    const goBack = () => {
        navigate(process.env.REACT_APP_SETTING_PATH);
    };

    return (
        <SettingPlantComponent
            plant={plant}
            open={open}
            onNameChange={onNameChange}
            onDayChange={onDayChange}
            onModifyClick={onModifyClick}
            onOpenClick={onOpenClick}
            onYesClick={onYesClick}
            onNoClick={onNoClick}
            goBack={goBack}
        />
    );
};

export default React.memo(SettingPlant);