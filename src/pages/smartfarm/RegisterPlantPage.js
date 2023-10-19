import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import RegisterPlant from '../../containers/smartfarm/RegisterPlant';
import Snackbar from '../../containers/common/Snackbar';

const RegisterPlantPage = () => {
    return (
        <div>
            <ContainerBox maxWidth="xs">
                <TypographyPageName text="작물 등록"/>
                <RegisterPlant />
            </ContainerBox>
            <Snackbar />
        </div>
    );
};

export default RegisterPlantPage;