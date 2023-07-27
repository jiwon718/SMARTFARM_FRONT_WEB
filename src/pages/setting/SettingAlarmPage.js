import AppBar from "../../containers/common/AppBar";
import ContainerBox from "../../components/common/ContainerBox";
import SettingAlarm from "../../containers/setting/SettingAlarm";

const SettingAlarmPage = () => {
    return (
        <div>
            <AppBar text='푸시 알람 설정'/>
            <ContainerBox maxWidth='xs'>
                <SettingAlarm />
            </ContainerBox>
        </div>
    );
};

export default SettingAlarmPage;