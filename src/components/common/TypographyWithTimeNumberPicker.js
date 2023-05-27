import { MenuItem, Stack, Typography } from '@mui/material';
import SelectAutoWidth from './SelectAutoWidth';

const TypographyWithTimeNumberPicker = ({ text, sx }) => {
    // const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // const weekNumbers = [1, 2, 3];
    const dayNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29
    ];
    const timeNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60
    ]
    const periods = [
        { value: 'month', text: '개월'},
        { value: 'week', text: '주'},
        { value: 'day', text: '일'},
        { value: 'hour', text: '시간'}
    ];
    const times = [
        { value: 'minute', text: '분'},
        { value: 'second', text: '초'}
    ];

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={sx}
        >
            <SelectAutoWidth>
                {dayNumbers.map(dayNumber => <MenuItem value={dayNumber}>{dayNumber}</MenuItem>)}
            </SelectAutoWidth>
            <SelectAutoWidth>
                {periods.map(period => <MenuItem value={period.value}>{period.text}</MenuItem>)}
            </SelectAutoWidth>
            <Typography variant='h6' sx={{ mr: 2 }}>마다</Typography>
            <SelectAutoWidth>
                {timeNumbers.map(number => <MenuItem value={number}>{number}</MenuItem>)}
            </SelectAutoWidth>
            <SelectAutoWidth>
                {times.map(time => <MenuItem value={time.value}>{time.text}</MenuItem>)}
            </SelectAutoWidth>
            <Typography variant='h6'>동안 {text}</Typography>
        </Stack>
    );
};

export default TypographyWithTimeNumberPicker;