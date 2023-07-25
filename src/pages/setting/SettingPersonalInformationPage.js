import AppBar from "../../containers/common/AppBar";
import ContainerBox from "../../components/common/ContainerBox";
import SettingPersonalInformation from "../../containers/setting/SettingPersonalInformation";

const SettingPersonalInformationPage = () => {
    return (
        <div>
            <AppBar text='개인정보 수정'/>
            <ContainerBox maxWidth="xs">
                <SettingPersonalInformation />
            </ContainerBox>
        </div>
    );
};

export default SettingPersonalInformationPage;