// 데이터 송수신 오류 표시하기(getError, postError)

import { Box, Typography } from '@mui/material';
import MyCard from '../common/MyCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithNumberPicker from '../common/TypographyWithNumberPicker';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimePicker from '../common/TypographyWithTimePicker';

const LedControl = ({
    ledControl,
    onPowerChange,
    onWorkChange,
    onLevelChange,
    onAutoWorkChange,
    onAutoWorkStartTimeChange,
    onAutoWorkEndTimeChange
}) => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div style={{ width: '100%'}} >
            <MyCard sx={{ width: '100%' }}>
                <TypographyWithSwitch
                    text='전원 ON/OFF'
                    checked={ledControl.power}
                    onChange={onPowerChange}
                />
                <TypographyWithSwitch
                    text='켜기/끄기'
                    sx={{ mt: 1.5 }}
                    disabled={ledControl.autoWork || !ledControl.power}
                    checked={ledControl.work}
                    onChange={onWorkChange}
                />
                <TypographyWithNumberPicker
                    text='밝기'
                    disabled={!ledControl.power}
                    value={ledControl.lightLevel}
                    onChange={onLevelChange}
                    numbers={numbers}
                    sx={{ mt: 1.5 }}
                />
                <CheckBoxWithLabel
                    text='자동 작동하기'
                    disabled={!ledControl.power}
                    checked={ledControl.autoWork}
                    onChange={onAutoWorkChange}
                    sx={{ mt: 1.5}}
                />
                <TypographyWithTimePicker
                    text='켜기'
                    disabled={!ledControl.autoWork || !ledControl.power}
                    value={ledControl.autoWorkStartTime}
                    onChange={onAutoWorkStartTimeChange}
                />
                <TypographyWithTimePicker
                    text='끄기'
                    disabled={!ledControl.autoWork || !ledControl.power}
                    value={ledControl.autoWorkEndTime}
                    onChange={onAutoWorkEndTimeChange}
                    sx={{ mt: 0.3 }}
                />
            </MyCard>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h6' sx={{ mt: 6 }}>{ledControl.status}</Typography>
            </Box>
        </div>
    );
};

export default LedControl;