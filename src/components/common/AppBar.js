import { Stack, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButtonWithTooltip from '../common/IconButtonWithTooltip';

const ControlAppBar = ({ text }) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ margin: 0.2 }}
        >
            <Stack direction='row' alignItems='center'>
                <IconButtonWithTooltip title='홈'>
                    <HomeRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='알람'>
                    <NotificationsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='설정'>
                    <SettingsRoundedIcon sx={{ fontSize: 36 }}/>
                </IconButtonWithTooltip>
                <IconButtonWithTooltip title='로그아웃'>
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
            <div style={{ width: 208 }}/>
        </Stack>
    );
};

export default ControlAppBar;