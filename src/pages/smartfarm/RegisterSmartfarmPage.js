import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import RegisterSmartfarm from '../../containers/smartfarm/RegisterSmartfarm';

const RegisterSmartfarmPage = () => {
    return (
        <div>
            <ContainerBox maxWidth="xs">
                <TypographyPageName text="스마트팜 등록"/>
                <RegisterSmartfarm />
            </ContainerBox>
        </div>
    );
};

export default RegisterSmartfarmPage;