// SERVER: 스마트팜 중앙문 상태 및 제어 정보 요청

import { Box, Typography } from '@mui/material';
import MyCard from '../common/MyCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithButton from '../common/TypographyWithButton';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimeNumberPicker from '../common/TypographyWithTimeNumberPicker';

const CenterDoorControl = ({
    centerDoorControl,
    onPowerChange,
    onWorkChange,
    onAutoWorkChange,
    onAutoWorkPeriodChange,
    onAutoWorkPeriodUnitChange,
    onAutoWorkTimeChange,
    onAutoWorkTimeUnitChange
}) => {
    return (
        <div style={{ width: '100%'}} >
            <MyCard sx={{ width: '100%' }}>
                <TypographyWithSwitch
                    text='전원 ON/OFF'
                    checked={centerDoorControl.power}
                    onChange={onPowerChange}
                />
                <TypographyWithButton
                    text='문 열기'
                    buttonText={centerDoorControl.workButtonText}
                    disabled={!centerDoorControl.power || centerDoorControl.autoWork}
                    onClick={onWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <CheckBoxWithLabel
                    text='자동 작동하기'
                    disabled={!centerDoorControl.power}
                    checked={centerDoorControl.autoWork}
                    onChange={onAutoWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <TypographyWithTimeNumberPicker
                    text='작동하기'
                    disabled={!centerDoorControl.power || !centerDoorControl.autoWork}
                    periodNumbers={centerDoorControl.autoWorkPeriodNumber}
                    period={centerDoorControl.autoWorkPeriod}
                    onPeriodChange={onAutoWorkPeriodChange}
                    periodUnit={centerDoorControl.autoWorkPeriodUnit}
                    onPeriodUnitChange={onAutoWorkPeriodUnitChange}
                    time={centerDoorControl.autoWorkTime}
                    onTimeChange={onAutoWorkTimeChange}
                    timeUnit={centerDoorControl.autoWorkTimeUnit}
                    onTimeUnitChange={onAutoWorkTimeUnitChange}
                    sx={{ mt: 1.5 }}
                />
            </MyCard>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h6' sx={{ mt: 6 }}>{centerDoorControl.status}</Typography>
            </Box>
        </div>
    )
};

export default CenterDoorControl;