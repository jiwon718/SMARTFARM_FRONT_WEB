import ContainerBox from '../../components/common/ContainerBox';
import AppBar from '../../containers/common/AppBar';
import LedControl from '../../containers/smartfarm/LedControl';
import ControlTabs from '../../components/smartfarm/ControlTabs';

const LedControlPage = () => {
    return (
        <div>
            <AppBar text='LED'/>
            <ContainerBox maxWidth="sm">
                <LedControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default LedControlPage;