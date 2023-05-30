import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import NotRegisterSmartfarm from '../../components/smartfarm/NotRegisterSmartfarm';

const NotRegisterSmartfarmPage = () => {
    return (
        <div>
            <AppBar text='홈'/>
            <ContainerBox maxWidth="sm">
                <NotRegisterSmartfarm />
            </ContainerBox>
        </div>
    );
};

export default NotRegisterSmartfarmPage;