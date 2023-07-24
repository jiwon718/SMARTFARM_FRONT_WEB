import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import HomeNotRegisterPlant from '../../containers/smartfarm/HomeNotRegisterPlant';

const HomeNotRegisterPlantPage = () => {
    return (
        <div>
            <AppBar text='홈'/>
            <ContainerBox maxWidth="sm">
                <HomeNotRegisterPlant />
            </ContainerBox>
        </div>
    );
};

export default HomeNotRegisterPlantPage;