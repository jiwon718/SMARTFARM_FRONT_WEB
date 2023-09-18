import ContainerBox from '../../components/common/ContainerBox';
import AppBar from '../../containers/common/AppBar';
import WateringSystemControl from '../../containers/smartfarm/WateringSystemControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const WateringSystemControlPage = () => {
    return (
        <div>
            <AppBar text='관수 시스템'/>
            <ContainerBox maxWidth="sm">
                <WateringSystemControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default WateringSystemControlPage;