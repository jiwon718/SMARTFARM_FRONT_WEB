import { Stack, Divider } from '@mui/material';
import SettingBox from './SettingBox';
import TypographyWithSwitch from './TypographyWithSwitch';
import SettingBoxOnlyTypography from './SettingBoxOnlyTypography';
import ButtonDefault from '../common/ButtonDefault';

const SettingAlarm = ({
    settingAlarm,
    existSmartfarm,
    existPlant,
    onModifyPersonalInformationChange,
    onLogInOutChange,
    onModifySmartfarmChange,
    onAutoControlSmartfarmChange,
    onWarnSmartfarmChange,
    onModifyPlantChange,
    onHarvestPlantChange,
    goRegisterSmartfarm,
    goRegisterPlant
}) => {
    return (
        <div style={{ width: '100%', marginTop: 32 }}>
            <SettingBox
                title='사용자'
                sx={{ mb: 4 }}
            >
                <TypographyWithSwitch
                    text='개인정보 수정 알람'
                    checked={settingAlarm.modifyPersonalInformation}
                    onChange={onModifyPersonalInformationChange}
                />
                <TypographyWithSwitch
                    text='로그인/로그아웃 알람'
                    sx={{ mt: 1.5 }}
                    checked={settingAlarm.logInOut}
                    onChange={onLogInOutChange}
                />
            </SettingBox>
            <SettingBoxOnlyTypography
                title='스마트팜'
                sx={{ mb: 4 }}
            >
                { existSmartfarm === false ? (
                    <ButtonDefault
                        sx={{
                            mt: 2,
                            fontSize: 'medium',
                            fontweight: 'bold',
                            color: '#ffffff'
                        }}
                        onClick={goRegisterSmartfarm}
                        text="스마트팜 등록"
                    />
                ) : (
                    <Stack
                        direction='column'
                        divider={<Divider orientation="horizontal" flexItem />}
                        sx={{ mt: 2 }}
                    >
                        <TypographyWithSwitch
                            text='스마트팜 정보 수정 알람'
                            checked={settingAlarm.modifySmartfarm}
                            onChange={onModifySmartfarmChange}
                        />
                        <TypographyWithSwitch
                            text='스마트팜 현장/원격 제어 알람'
                            sx={{ mt: 1.5 }}
                            checked={settingAlarm.autoControlSmartfarm}
                            onChange={onAutoControlSmartfarmChange}
                        />
                        <TypographyWithSwitch
                            text='스마트팜 이상 경고 알람'
                            sx={{ mt: 1.5 }}
                            checked={settingAlarm.warnSmartfarm}
                            onChange={onWarnSmartfarmChange}
                        />
                    </Stack>
                )}
            </SettingBoxOnlyTypography>
            <SettingBoxOnlyTypography
                title='작물'
                sx={{ mb: 4 }}
            >
                { existPlant === false ? (
                    <ButtonDefault
                        sx={{
                            mt: 2,
                            fontSize: 'medium',
                            fontweight: 'bold',
                            color: '#ffffff'
                        }}
                        onClick={goRegisterPlant}
                        text="작물 등록"
                    />
                ) : (
                    <Stack
                        direction='column'
                        divider={<Divider orientation="horizontal" flexItem />}
                        sx={{ mt: 2 }}
                    >
                        <TypographyWithSwitch
                            text='작물 정보 수정 알람'
                            checked={settingAlarm.modifyPlant}
                            onChange={onModifyPlantChange}
                        />
                        <TypographyWithSwitch
                            text='작물 적정 수확 시기 알람'
                            sx={{ mt: 1.5 }}
                            checked={settingAlarm.harvestPlant}
                            onChange={onHarvestPlantChange}
                        />
                    </Stack>
                )}
            </SettingBoxOnlyTypography>
        </div>
    );
};

export default SettingAlarm;