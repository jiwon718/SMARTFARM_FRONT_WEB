import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/smartfarm/ControlAppBar';
import WateringSystemControl from '../../containers/smartfarm/WateringSystemControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';
import Snackbar from '../../containers/common/Snackbar';

const WateringSystemControlPage = () => {
    return (
        <div>
            <ControlAppBar text='관수 시스템'/>
            <ContainerBox maxWidth="sm">
                <WateringSystemControl />
            </ContainerBox>
            <ControlTabs />
            <Snackbar />
        </div>
    )
};

export default WateringSystemControlPage;