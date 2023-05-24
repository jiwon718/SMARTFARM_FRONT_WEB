import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ButtonDefault from '../common/ButtonDefault';

const SearchPasswordSuccess = () => {
    const navigate = useNavigate();

    const goLogIn = () => {
        navigate('/');
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant="subtitle1">
                    회원정보에 등록되어 있는 휴대전화번호로 임시 비밀번호를 전송해드렸습니다.
                </Typography>
            </Box>
            <ButtonDefault
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goLogIn}
                text="로그인"
            />
        </div>
    );
};

export default SearchPasswordSuccess;