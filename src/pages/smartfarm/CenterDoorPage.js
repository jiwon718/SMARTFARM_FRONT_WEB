import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/smartfarm/ControlAppBar';
import CenterDoorControl from '../../containers/smartfarm/CenterDoorControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const CenterDoorPage = () => {
    return (
        <div>
            <ControlAppBar text='중앙문'/>
            <ContainerBox maxWidth="sm">
                <CenterDoorControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default CenterDoorPage;