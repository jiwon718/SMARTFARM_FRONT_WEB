import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/smartfarm/ControlAppBar';
import FanControl from '../../containers/smartfarm/FanControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const FanControlPage = () => {
    return (
        <div>
            <ControlAppBar text='환기팬'/>
            <ContainerBox maxWidth="sm">
                <FanControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default FanControlPage;