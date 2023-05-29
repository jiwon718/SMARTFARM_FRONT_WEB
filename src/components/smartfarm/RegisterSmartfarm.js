// '스마트팜 등록' 버튼 클릭 시 DB에 스마트팜 등록하기

import { useNavigate } from 'react-router-dom';
import TextFieldWithButton from '../common/TextFieldWithButton';
import ButtonDefault from '../common/ButtonDefault';

const RegisterSmartfarm = ({
    smartfarm,
    onSmartfarmNumberChange,
    onSuccessChange
}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const onRegisterClick = () => {
        console.log('DB: 스마트팜 등록');
        navigate('/register/smartfarm/success');
    };

    return (
        <div style={{ width: '100%' }}>
            <TextFieldWithButton
                textFieldLabel="스마트팜 고유번호"
                textFieldValue={smartfarm.smartfarmNumber}
                textFieldOnChange={onSmartfarmNumberChange}
                buttonDisabled={smartfarm.smartfarmNumber === '' ? true : false}
                buttonOnClick={onSuccessChange}
                buttonText="중복 확인"
            />
            <ButtonDefault
                disabled={!smartfarm.success}
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={onRegisterClick}
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