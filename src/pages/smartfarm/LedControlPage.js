import ContainerBox from '../../components/common/ContainerBox';
import ControlAppBar from '../../components/common/ControlAppBar';
import LedControl from '../../components/smartfarm/LedControl';
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