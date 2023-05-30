import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import NotRegisterPlant from '../../components/smartfarm/NotRegisterPlant';

const NotRegisterSmartfarmPage = () => {
    return (
        <div>
            <AppBar text='홈'/>
            <ContainerBox maxWidth="sm">
                <NotRegisterPlant />
            </ContainerBox>
        </div>
    );
};

export default NotRegisterSmartfarmPage;