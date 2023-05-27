import { Box, Typography } from '@mui/material';
import ControlCard from '../common/ControlCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithButton from '../common/TypographyWithButton';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimeNumberPicker from '../common/TypographyWithTimeNumberPicker';

const FanControl = ({
    fanControl,
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
            <ControlCard sx={{ width: '100%' }}>
                <TypographyWithSwitch
                    text='전원 ON/OFF'
                    checked={fanControl.power}
                    onChange={onPowerChange}
                />
                <TypographyWithButton
                    text='작동하기'
                    buttonText={fanControl.workButtonText}
                    disabled={!fanControl.power || fanControl.autoWork}
                    onClick={onWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <CheckBoxWithLabel
                    text='자동 작동하기'
                    disabled={!fanControl.power}
                    checked={fanControl.autoWork}
                    onChange={onAutoWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <TypographyWithTimeNumberPicker
                    text='작동하기'
                    disabled={!fanControl.power || !fanControl.autoWork}
                    periodNumbers={fanControl.autoWorkPeriodNumber}
                    period={fanControl.autoWorkPeriod}
                    onPeriodChange={onAutoWorkPeriodChange}
                    periodUnit={fanControl.autoWorkPeriodUnit}
                    onPeriodUnitChange={onAutoWorkPeriodUnitChange}
                    time={fanControl.autoWorkTime}
                    onTimeChange={onAutoWorkTimeChange}
                    timeUnit={fanControl.autoWorkTimeUnit}
                    onTimeUnitChange={onAutoWorkTimeUnitChange}
                    sx={{ mt: 1.5 }}
                />
            </ControlCard>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h6' sx={{ mt: 6 }}>{fanControl.status}</Typography>
            </Box>
        </div>
    )
};

export default FanControl;