import ContainerBox from '../../components/common/ContainerBox';
import AppBar from '../../containers/common/AppBar';
import FanControl from '../../containers/smartfarm/FanControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const FanControlPage = () => {
    return (
        <div>
            <AppBar text='환기팬'/>
            <ContainerBox maxWidth="sm">
                <FanControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default FanControlPage;