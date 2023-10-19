import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import RegisterSmartfarm from '../../containers/smartfarm/RegisterSmartfarm';
import Snackbar from '../../containers/common/Snackbar';

const RegisterSmartfarmPage = () => {
    return (
        <div>
            <ContainerBox maxWidth="xs">
                <TypographyPageName text="스마트팜 등록"/>
                <RegisterSmartfarm />
            </ContainerBox>
            <Snackbar />
        </div>
    );
};

export default RegisterSmartfarmPage;