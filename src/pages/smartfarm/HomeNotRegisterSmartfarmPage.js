import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import HomeNotRegisterSmartfarm from '../../containers/smartfarm/HomeNotRegisterSmartfarm';

const HomeNotRegisterSmartfarmPage = () => {
    return (
        <div>
            <AppBar text='홈'/>
            <ContainerBox maxWidth="sm">
                <HomeNotRegisterSmartfarm />
            </ContainerBox>
        </div>
    );
};

export default HomeNotRegisterSmartfarmPage;