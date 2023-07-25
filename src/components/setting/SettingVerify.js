// SERVER: 서버로 해당 비밀번호 인증 요청
// 인증 결과에 따른 페이지 이동
// : 실패 - 해당 페이지에 그대로 있음
// : 성공 - 다음 페이지로 이동

import TextFieldPassword from "../../containers/common/TextFieldPassword";
import ButtonDefault from "../common/ButtonDefault";

const SettingVerify = ({
    password,
    onPasswordChange,
    onVerifyClick
}) => {
    return (
        <div>
            <TextFieldPassword
                inputLabel="비밀번호"
                value={password}
                onChange={onPasswordChange}
            />
            <ButtonDefault
                disabled={false}
                sx={{
                    mt: 6.5,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={onVerifyClick}
                text="다음"
            />
        </div>
    );
};

export default SettingVerify;