// '인증번호 전송' 버튼 기능 추가하기
// : 휴대전화 인증번호 API 사용하기
// : 재전송 관련 기능 추가 고민하기
// '다음' 버튼 인증 완료 후 활성화 추가하기
// '다음' 버튼 클릭 시 서버에 이름과 전화번호로 아이디 찾은 후 결과 받기
// 성공, 실패에 따라 결과 페이지 이동하기

import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import TextFieldDefault from '../common/TextFieldDefault';
import TextFieldWithButton from '../common/TextFieldWithButton';
import ButtonDefault from '../common/ButtonDefault';

const SearchId = ({
    name,
    phoneNumber,
    onNameChange,
    onPhoneNumberChange
}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goNext = () => {
        console.log('SERVER: 이름과 전화번호로 아이디 찾기');
        navigate('success');
    }

    return (
        <div>
            <TextFieldDefault
                label="이름"
                autoFocus={true}
                value={name}
                onChange={onNameChange}
                sx={{ mb: 3 }}
            />
            <Grid container rowSpacing={3}>
                <TextFieldWithButton
                    textFieldLabel="휴대전화번호('-' 제외)"
                    textFieldDisabled={name === ''}
                    textFieldOnChange={onPhoneNumberChange}
                    buttonDisabled={name === '' || phoneNumber === ''}
                    buttonText="인증번호 전송"/>
                <TextFieldWithButton
                    textFieldLabel="인증번호"
                    textFieldDisabled={true}
                    buttonDisabled={true}
                    buttonText="인증번호 확인"
                />
            </Grid>
            <ButtonDefault
                disabled={false}
                color="secondary"
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goNext}
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