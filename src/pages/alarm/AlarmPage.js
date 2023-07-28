import AppBar from '../../containers/common/AppBar';
import ContainerBox from '../../components/common/ContainerBox';
import AlarmList from '../../containers/alarm/AlarmList';

const AlarmPage = () => {
    return (
        <div>
            <AppBar text='알람'/>
            <ContainerBox maxWidth='xs'>
                <AlarmList />
            </ContainerBox>
        </div>
    );
};

export default AlarmPage;