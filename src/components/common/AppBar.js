// '알람' 버튼 클릭 시 알람 화면으로 이동하기
// '설정' 버튼 클릭 시 설정 화면으로 이동하기

import { Stack, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TuneIcon from '@mui/icons-material/Tune';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButtonWithTooltip from '../common/IconButtonWithTooltip';

const AppBar = ({
    name,
    text,
    children,
    onLogOutClick,
    goHome,
    goSmartfarm,
    goAlarm,
    goSetting
}) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ margin: 0.2, display: 'flex' }}
        >
            <Stack direction='row' alignItems='center' sx={{ flex: 1 }}>
                <IconButtonWithTooltip title='홈' onClick={goHome}>
                    <HomeRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='스마트팜' onClick={goSmartfarm}>
                    <TuneIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='알람' onClick={goAlarm}>
                    <NotificationsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='설정' onClick={goSetting}>
                    <SettingsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='로그아웃' onClick={onLogOutClick}>
                    <LogoutRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <Typography
                    component="h3"
                    sx={{
                        marginLeft: 1,
                        fontWeight: 'bold',
                        color: '#000000',
                        textAlign: 'center'
                    }}
                >
                    {name}
                </Typography>
            </Stack>
            <Typography
                component="h1"
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    color: '#000000',
                    textAlign: 'center',
                    flex: 1
                }}
            >
                {text}
            </Typography>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {children}
            </div>
        </Stack>
    );
};

export default AppBar;