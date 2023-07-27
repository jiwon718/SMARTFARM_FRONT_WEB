// SERVER: 서버에 해당 계정 정보 수정 요청
// SERVER: 서버에 해당 계정 탈퇴 요청
// 계정 탈퇴에 따른 페이지 이동
// : 탈퇴 성공 시 설정 목록 페이지로 이동
// : 탈퇴 실패 시 해당 페이지에 그대로

import { Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import TextFieldDefault from "../common/TextFieldDefault";
import TextFieldWithButton from "../common/TextFieldWithButton";
import ButtonDefault from '../common/ButtonDefault';
import TextFieldPassword from '../../containers/common/TextFieldPassword';

const SettingPersonalInformation = ({
    name,
    phoneNumber,
    password,
    open,
    onNameChange,
    onPhoneNumberChange,
    onPasswordChange,
    onModifyClick,
    onOpenClick,
    onYesClick,
    onNoClick,
    goBack
}) => {
    return (
        <div style={{ marginTop: 32 }}>
            <TextFieldDefault
                label="이름"
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
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={onModifyClick}
                text="개인정보 수정"
            />
            <ButtonDefault
                disabled={false}
                sx={{
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                color='secondary'
                onClick={onOpenClick}
                text="회원 탈퇴"
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
            <Dialog
                open={open}
                onClose={onNoClick}
            >
                <DialogTitle>회원 탈퇴</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        회원 탈퇴 시 개인정보와 작성한 스마트팜 및 작물 관련 데이터가 전부 삭제됩니다.
                        그래도 탈퇴하신다면, 아래 비밀번호를 입력 후 예 버튼을 클릭해주세요.
                    </DialogContentText>
                    <TextFieldPassword
                        inputLabel="비밀번호"
                        value={password}
                        onChange={onPasswordChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onNoClick}>아니요</Button>
                    <Button onClick={onYesClick}>예</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingPersonalInformation;