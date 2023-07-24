import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../containers/common/ControlAppBar';
import LedControl from '../../containers/smartfarm/LedControl';
import ControlTabs from '../../components/common/ControlTabs';

const LedControlPage = () => {
    return (
        <div>
            <ControlAppBar text='LED'/>
            <ContainerBox maxWidth="sm">
                <LedControl />
            </ContainerBox>
            <ControlTabs />
        </div>
    )
};

export default LedControlPage;