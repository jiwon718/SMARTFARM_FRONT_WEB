import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import Home from '../../containers/smartfarm/Home';

const HomePage = () => {
    return (
        <div>
            <AppBar text='홈'/>
            <ContainerBox maxWidth="sm">
                <Home />
            </ContainerBox>
        </div>
    );
};

export default HomePage;