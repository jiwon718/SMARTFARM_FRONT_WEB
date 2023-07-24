import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNotRegisterSmartfarmComponent from '../../components/smartfarm/HomeNotRegisterSmartfarm';

const HomeNotRegisterSmartfarm = () => {
    const navigate = useNavigate();

    const goRegisterSmartfarm = () => {
        navigate(process.env.REACT_APP_REGISTER_SMARTFARM_PATH);
    };

    return (
        <HomeNotRegisterSmartfarmComponent goRegisterSmartfarm={goRegisterSmartfarm}/>
    );
};

export default React.memo(HomeNotRegisterSmartfarm);