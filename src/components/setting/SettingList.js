import SettingBox from './SettingBox';
import SettingItem from '../../containers/setting/SettingItem';
import profile from '../../lib/icon/profile.png';
import lock from '../../lib/icon/lock.png';
import greenhouse from '../../lib/icon/greenhouse.png';
import plant from '../../lib/icon/plant.png';
import bell from '../../lib/icon/bell.png';

const SettingList = () => {
    return (
        <div style={{ width: '100%'}}>
            <SettingBox
                title='사용자'
                sx={{ mb: 4 }}
            >
                <SettingItem
                    image={profile}
                    title='개인정보 수정'
                    path={process.env.REACT_APP_SETTING_PERSONAL_INFORMATION_PATH}
                />
                <SettingItem
                    image={lock}
                    title='비밀번호 변경'
                    path={process.env.REACT_APP_SETTING_PASSWORD_PATH}
                />
            </SettingBox>
            <SettingBox
                title='스마트팜'
                sx={{ mb: 4 }}
            >
                <SettingItem
                    image={greenhouse}
                    title='스마트팜 수정'
                    path={process.env.REACT_APP_SETTING_SMARTFARM_PATH}
                />
            </SettingBox>
            <SettingBox
                title='작물'
                sx={{ mb: 4 }}
            >
                <SettingItem
                    image={plant}
                    title='작물 수정'
                    path={process.env.REACT_APP_SETTING_PLANT_PATH}
                />
            </SettingBox>
            <SettingBox
                title='시스템'
            >
                <SettingItem
                    image={bell}
                    title='푸시 알람 설정'
                    path={process.env.REACT_APP_SETTING_ALARM_PATH}
                />
            </SettingBox>
        </div>
    );
};

export default SettingList;