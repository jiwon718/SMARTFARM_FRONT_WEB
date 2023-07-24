// SERVER: 스마트팜 관수 시스템 상태 및 제어 정보 요청

import { Box, Typography } from '@mui/material';
import MyCard from '../common/MyCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithButton from '../common/TypographyWithButton';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimeNumberPicker from '../common/TypographyWithTimeNumberPicker';

const WateringSystemControl = ({
    wateringSystemControl,
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
                    checked={wateringSystemControl.power}
                    onChange={onPowerChange}
                />
                <TypographyWithButton
                    text='물 주기'
                    buttonText={wateringSystemControl.workButtonText}
                    disabled={!wateringSystemControl.power || wateringSystemControl.autoWork}
                    onClick={onWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <CheckBoxWithLabel
                    text='자동 물 주기'
                    disabled={!wateringSystemControl.power}
                    checked={wateringSystemControl.autoWork}
                    onChange={onAutoWorkChange}
                    sx={{ mt: 1.5 }}
                />
                <TypographyWithTimeNumberPicker
                    text='물 주기'
                    disabled={!wateringSystemControl.power || !wateringSystemControl.autoWork}
                    periodNumbers={wateringSystemControl.autoWorkPeriodNumber}
                    period={wateringSystemControl.autoWorkPeriod}
                    onPeriodChange={onAutoWorkPeriodChange}
                    periodUnit={wateringSystemControl.autoWorkPeriodUnit}
                    onPeriodUnitChange={onAutoWorkPeriodUnitChange}
                    time={wateringSystemControl.autoWorkTime}
                    onTimeChange={onAutoWorkTimeChange}
                    timeUnit={wateringSystemControl.autoWorkTimeUnit}
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
                <Typography variant='h6' sx={{ mt: 6 }}>{wateringSystemControl.status}</Typography>
            </Box>
        </div>
    )
};

export default WateringSystemControl;