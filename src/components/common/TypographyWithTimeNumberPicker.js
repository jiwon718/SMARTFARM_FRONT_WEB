import { MenuItem, Stack, Typography } from '@mui/material';
import SelectAutoWidth from './SelectAutoWidth';

const TypographyWithTimeNumberPicker = ({ disabled, periodNumbers, period, onPeriodChange, periodUnit, onPeriodUnitChange, time, onTimeChange, timeUnit, onTimeUnitChange, text, sx }) => {
    const timeNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60
    ];
    const periods = ['개월', '주', '일', '시간'];
    const times = ['분', '초'];

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={sx}
        >
            <SelectAutoWidth
                disabled={disabled}
                value={period}
                onChange={onPeriodChange}
            >
                {periodNumbers.map((periodNumber, index) => <MenuItem key={index} value={periodNumber}>{periodNumber}</MenuItem>)}
            </SelectAutoWidth>
            <SelectAutoWidth
                disabled={disabled}
                value={periodUnit}
                onChange={onPeriodUnitChange}
            >
                {periods.map((period, index) => <MenuItem key={index} value={period}>{period}</MenuItem>)}
            </SelectAutoWidth>
            <Typography variant='h6' sx={{ mr: 2 }}>마다</Typography>
            <SelectAutoWidth
                disabled={disabled}
                value={time}
                onChange={onTimeChange}
            >
                {timeNumbers.map((number, index) => <MenuItem key={index} value={number}>{number}</MenuItem>)}
            </SelectAutoWidth>
            <SelectAutoWidth
                disabled={disabled}
                value={timeUnit}
                onChange={onTimeUnitChange}
            >
                {times.map((time, index) => <MenuItem key={index} value={time}>{time}</MenuItem>)}
            </SelectAutoWidth>
            <Typography variant='h6'>동안 {text}</Typography>
        </Stack>
    );
};

export default TypographyWithTimeNumberPicker;