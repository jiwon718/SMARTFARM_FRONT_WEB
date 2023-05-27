import React from 'react';
import { useSelector } from 'react-redux';
import BasicComponent from '../../components/common/BasicHome';

const BasicHome = ({ children }) => {
    const ledStatus = useSelector(state => state.ledControl.status);
    const wateringSystemStatus = useSelector(state => state.wateringSystemControl.status);
    const fanStatus = useSelector(state => state.fanControl.status);

    return (
        <BasicComponent
            children={children}
            ledStatus={ledStatus}
            wateringSystemStatus={wateringSystemStatus}
            fanStatus={fanStatus}
        />
    );
};

export default BasicHome;