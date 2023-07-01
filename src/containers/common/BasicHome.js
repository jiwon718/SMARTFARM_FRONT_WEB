import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicHomeComponent from '../../components/common/BasicHome';
import { getSmartfarm } from '../../modules/smartfarm/smartfarm';
import { getLed } from '../../modules/smartfarm/ledControl';
import { getWateringSystem } from '../../modules/smartfarm/wateringSystemControl';
import { getFan } from '../../modules/smartfarm/fanControl';

const BasicHome = ({ children }) => {
    const dispatch = useDispatch();

    const temperature = useSelector(state => state.smartfarm.temperature);
    const humidity = useSelector(state => state.smartfarm.humidity);
    const ledStatus = useSelector(state => state.ledControl.status);
    const wateringSystemStatus = useSelector(state => state.wateringSystemControl.status);
    const fanStatus = useSelector(state => state.fanControl.status);

    useEffect(() => {
        dispatch(getSmartfarm());
        dispatch(getLed());
        dispatch(getWateringSystem());
        dispatch(getFan());
    }, [dispatch]);

    return (
        <BasicHomeComponent
            children={children}
            temperature={temperature}
            humidity={humidity}
            ledStatus={ledStatus}
            wateringSystemStatus={wateringSystemStatus}
            fanStatus={fanStatus}
        />
    );
};

export default BasicHome;