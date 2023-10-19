import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/smartfarm/ControlAppBar';
import CenterDoorControl from '../../containers/smartfarm/CenterDoorControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';
import Snackbar from '../../containers/common/Snackbar';

const CenterDoorPage = () => {
    return (
        <div>
            <ControlAppBar text='중앙문'/>
            <ContainerBox maxWidth="sm">
                <CenterDoorControl />
            </ContainerBox>
            <ControlTabs />
            <Snackbar />
        </div>
    )
};

export default CenterDoorPage;