import ContainerBox from '../../components/common/ContainerBox';
import ImgWithTypography from '../../components/common/ImgWithTypography';
import greenhouse from '../../lib/emoji/greenhouse.png';

const RegisterSmartfarmSuccessPage = () => {
    return (
        <ContainerBox maxWidth="xs">
            <ImgWithTypography image={greenhouse} text='스마트팜 등록 완료!'/>
        </ContainerBox>
    );
};

export default RegisterSmartfarmSuccessPage;