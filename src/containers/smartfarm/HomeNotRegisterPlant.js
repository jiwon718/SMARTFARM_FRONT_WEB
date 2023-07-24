import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNotRegisterPlantComponent from '../../components/smartfarm/HomeNotRegisterPlant';

const HomeNotRegisterPlant = () => {
    const navigate = useNavigate();

    const goRegisterPlant = () => {
        navigate(process.env.REACT_APP_REGISTER_PLANT_PATH);
    };

    return (
        <HomeNotRegisterPlantComponent goRegisterPlant={goRegisterPlant}/>
    );
};

export default React.memo(HomeNotRegisterPlant);