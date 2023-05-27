import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../components/common/ControlAppBar';
import FanControl from '../../containers/smartfarm/FanControl';
import ControlTabs from '../../components/common/ControlTabs';

const FanControlPage = () => {
    return (
        <div>
            <ControlAppBar text='환풍기'/>
            <ContainerBox maxWidth="sm">
                <FanControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default FanControlPage;