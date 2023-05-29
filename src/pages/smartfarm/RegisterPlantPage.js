import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import RegisterPlant from '../../containers/smartfarm/RegisterPlant';

const RegisterPlantPage = () => {
    return (
        <div>
            <ContainerBox maxWidth="xs">
                <TypographyPageName text="작물 등록"/>
                <RegisterPlant />
            </ContainerBox>
        </div>
    );
};

export default RegisterPlantPage;