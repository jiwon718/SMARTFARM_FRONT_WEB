import ContainerBox from '../../components/common/ContainerBox';
import ImgWithTypography from '../../components/common/ImgWithTypography';
import plant from '../../lib/emoji/plant.png';

const RegisterSmartfarmSuccessPage = () => {
    return (
        <ContainerBox maxWidth="xs">
            <ImgWithTypography image={plant} text='작물 등록 완료!'/>
        </ContainerBox>
    );
};

export default RegisterSmartfarmSuccessPage;