import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import TextFieldWithButton from '../common/TextFieldWithButton';
import ButtonDefault from '../common/ButtonDefault';

const RegisterSmartfarm = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <div>
            <Grid container rowSpacing={3}>
                <TextFieldWithButton
                    textFieldLabel="스마트팜 고유번호"
                    buttonDisabled={true}
                    buttonText="중복 확인"
                />
                <TextFieldWithButton
                    textFieldLabel="비밀번호"
                    textFieldDisabled={true}
                    buttonDisabled={true}
                    buttonText="비밀번호 확인"
                />
            </Grid>
            <ButtonDefault
                disabled={true}
                color="secondary"
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                text="스마트팜 등록"
            />
            <ButtonDefault
                color="secondary"
                sx={{
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goBack}
                text="취소"
            />
        </div>
    )
};

export default RegisterSmartfarm;