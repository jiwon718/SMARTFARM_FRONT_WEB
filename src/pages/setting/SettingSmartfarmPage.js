import AppBar from "../../containers/common/AppBar";
import ContainerBox from "../../components/common/ContainerBox";
import SettingSmartfarm from "../../containers/setting/SettingSmartfarm";

const SettingSmartfarmPage = () => {
    return (
        <div>
            <AppBar text='스마트팜 수정'/>
            <ContainerBox maxWidth='xs'>
                <SettingSmartfarm />
            </ContainerBox>
        </div>
    );
};

export default SettingSmartfarmPage;