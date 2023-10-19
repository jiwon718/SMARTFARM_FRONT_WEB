import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/smartfarm/ControlAppBar';
import FanControl from '../../containers/smartfarm/FanControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';
import Snackbar from '../../containers/common/Snackbar';

const FanControlPage = () => {
    return (
        <div>
            <ControlAppBar text='환기팬'/>
            <ContainerBox maxWidth="sm">
                <FanControl />
            </ContainerBox>
            <ControlTabs />
            <Snackbar />
        </div>
    )
};

export default FanControlPage;