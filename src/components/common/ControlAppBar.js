// 원격 제어 기능 추가하기

import { Stack, Typography } from '@mui/material';
import AppBar from '../../containers/common/AppBar';
import { IOSSwitch } from '../common/TypographyWithSwitch';

const ControlAppBar = ({
    text,
    remoteControl,
    onRemoteControlChange
}) => {
    return (
        <AppBar text={text}>
            <div style={{ width: 208 }}>
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Typography variant='h6'>원격 제어</Typography>
                    <IOSSwitch
                        color='info'
                        sx={{ m: 1, ml: 1.4 }}
                        checked={remoteControl}
                        onChange={onRemoteControlChange}
                    />
                </Stack>
            </div>
        </AppBar>
    );
};

export default ControlAppBar;