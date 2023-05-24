import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Typography, TextField } from '@mui/material';
import TextFieldDefault from '../common/TextFieldDefault';
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
                <TextFieldDefault
                    label="이름"
                    autoFocus={true}
                />
                <TextFieldWithButton
                        textFieldLabel="작물 품종"
                        buttonDisabled={true}
                        buttonText="검색"
                />
            </Grid>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                sx={{ mt: 3 }}
            >
                <Typography variant='subtitle1' sx={{ mr: 1.5 }}>작물을 키운 지</Typography>
                <TextField
                    type='number'
                    InputLabelProps={{
                        shrink: true
                    }}
                    color='info'
                    sx={{
                        width: 65
                    }}
                />
                <Typography variant='subtitle1' sx={{ ml: 1 }}>일 지났어요</Typography>
            </Stack>
            <ButtonDefault
                disabled={true}
                color="secondary"
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                text="작물 등록"
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