import AppBar from "../../containers/common/AppBar";
import ContainerBox from '../../components/common/ContainerBox';
import SettingPassword from "../../containers/setting/SettingPassword";

const SettingPasswordPage = () => {
    return (
        <div>
            <AppBar text='비밀번호 재설정'/>
            <ContainerBox maxWidth='xs'>
                <SettingPassword />
            </ContainerBox>
        </div>
    );
};

export default SettingPasswordPage;