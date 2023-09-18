import ContainerBox from '../../components/common/ContainerBox';
import AppBar from '../../containers/common/AppBar';
import CenterDoorControl from '../../containers/smartfarm/CenterDoorControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const CenterDoorPage = () => {
    return (
        <div>
            <AppBar text='중앙문'/>
            <ContainerBox maxWidth="sm">
                <CenterDoorControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default CenterDoorPage;