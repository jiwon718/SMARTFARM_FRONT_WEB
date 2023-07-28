import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import SettingList from '../../containers/setting/SettingList';

const AlarmPage = () => {
    return (
        <div>
            <AppBar text='설정'/>
            <ContainerBox maxWidth='xs'>
                <SettingList />
            </ContainerBox>
        </div>
    );
};

export default AlarmPage;