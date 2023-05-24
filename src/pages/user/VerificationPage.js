import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import Verification from '../../components/user/Verification';

const VerificationPage = () => {
    return (
        <ContainerBox maxWidth="xs">
            <TypographyPageName text="본인인증"/>
            <Verification />
        </ContainerBox>
    );
};

export default VerificationPage;