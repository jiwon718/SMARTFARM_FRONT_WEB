// SERVER: 스마트팜 환기팬 상태 및 제어 정보 요청

import { Box, Typography } from '@mui/material';
import MyCard from '../common/MyCard';
import TypographyWithButton from '../common/TypographyWithButton';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimeNumberPicker from '../common/TypographyWithTimeNumberPicker';

const FanControl = ({
    fanControl,
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
                <TypographyWithButton
                    text='작동하기'
                    buttonText={fanControl.workButtonText}
                    disabled={fanControl.autoWork}
                    onClick={onWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <CheckBoxWithLabel
                    text='자동 작동하기'
                    checked={fanControl.autoWork}
                    onChange={onAutoWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <TypographyWithTimeNumberPicker
                    text='작동하기'
                    disabled={!fanControl.autoWork}
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
            </MyCard>
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