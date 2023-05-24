import ContainerBox from '../../components/common/ContainerBox';
import ImgWithTypography from '../../components/common/ImgWithTypography';
import wave from '../../lib/emoji/wave.png';

const SingUpSuccessPage = () => {
    return (
        <ContainerBox maxWidth="xs">
            <ImgWithTypography image={wave} text='회원가입 완료!'/>
        </ContainerBox>
    );
};

export default SingUpSuccessPage;