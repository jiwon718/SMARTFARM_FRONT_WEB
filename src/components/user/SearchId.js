// 인증번호 전송 버튼 기능 추가하기
// 휴대전화 인증 기능 추가하기 (like. TextFieldPassword)
// 다음 버튼 기능 추가하기
// 성공, 실패에 따라 결과 페이지 이동하기

import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import TextFieldDefault from '../common/TextFieldDefault';
import TextFieldWithButton from '../common/TextFieldWithButton';
import ButtonDefault from '../common/ButtonDefault';

const SearchId = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <TextFieldDefault
                label="이름"
                autoFocus={true}
                sx={{ mb: 3 }}
            />
            <Grid container rowSpacing={3}>
                <TextFieldWithButton
                    textFieldLabel="휴대전화번호('-' 제외)"
                    buttonDisabled={true}
                    buttonText="인증번호 전송"/>
                <TextFieldWithButton
                    textFieldLabel="인증번호"
                    textFieldDisabled={true}
                    buttonDisabled={true}
                    buttonText="인증번호 확인"
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
                text="다음"
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
    );
};

export default SearchId;