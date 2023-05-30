// '알람' 버튼 클릭 시 알람 화면으로 이동하기
// '설정' 버튼 클릭 시 설정 화면으로 이동하기

import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButtonWithTooltip from '../common/IconButtonWithTooltip';

const ControlAppBar = ({
    text,
    children,
    onLogOutChange
}) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home');
    }

    const onLogOutClick = () => {
        console.log('SERVER: 로그아웃 처리');
        onLogOutChange()
        navigate('/');
    }

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ margin: 0.2 }}
        >
            <Stack direction='row' alignItems='center'>
                <IconButtonWithTooltip title='홈' onClick={goHome}>
                    <HomeRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='알람'>
                    <NotificationsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='설정'>
                    <SettingsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='로그아웃' onClick={onLogOutClick}>
                    <LogoutRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
            </Stack>
            <Typography
                component="h1"
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    color: '#000000',
                    textAlign: 'center',
                    width: 208
                }}
            >
                {text}
            </Typography>
            <div style={{ width: 208 }}>
                {children}
            </div>
        </Stack>
    );
};

export default ControlAppBar;