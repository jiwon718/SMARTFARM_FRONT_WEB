import { useSelector } from 'react-redux';
import BasicHomeComponent from '../../components/common/BasicHome';

const BasicHome = ({ children }) => {
    const temperature = useSelector(state => state.smartfarm.temperature);
    const humidity = useSelector(state => state.smartfarm.humidity);
    const ledStatus = useSelector(state => state.ledControl.status);
    const wateringSystemStatus = useSelector(state => state.wateringSystemControl.status);
    const fanStatus = useSelector(state => state.fanControl.status);
    const centerDoorStatus = useSelector(state => state.centerDoorControl.status);

    return (
        <BasicHomeComponent
            children={children}
            temperature={temperature}
            humidity={humidity}
            ledStatus={ledStatus}
            wateringSystemStatus={wateringSystemStatus}
            fanStatus={fanStatus}
            centerDoorStatus={centerDoorStatus}
        />
    );
};

export default BasicHome;