import AppBar from "../../containers/common/AppBar";
import ContainerBox from "../../components/common/ContainerBox";
import SettingPlant from "../../containers/setting/SettingPlant";

const SettingPlantPage = () => {
    return (
        <div>
            <AppBar text='작물 수정'/>
            <ContainerBox maxWidth='xs'>
                <SettingPlant />
            </ContainerBox>
        </div>
    );
};

export default SettingPlantPage;