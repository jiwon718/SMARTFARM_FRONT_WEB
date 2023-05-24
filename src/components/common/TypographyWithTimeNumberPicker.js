import { useState } from 'react';
import { ThemeProvider, createTheme, FormControl, Select, MenuItem, Stack, Typography, TextField } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTimePicker: {
            styleOverrides: {
                root: {
                    color: 'info'
                },
            },
        },
    },
});

const SelectAutoWidth = ({ children }) => {
    const [unit, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
        <FormControl sx={{ mr: 1, minWidth: 50 }}>
            <Select
                value={unit}
                onChange={handleChange}
                autoWidth
            >
                {children}
            </Select>
        </FormControl>
    </ThemeProvider>
  );
}



const TypographyWithTimeNumberPicker = ({ text, sx }) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={sx}
        >
            <TextField
                type='number'
                InputLabelProps={{
                    shrink: true
                }}
                color='info'
                sx={{
                    width: 65,
                    mr: 0.5
                }}
            />
            <SelectAutoWidth>
                <MenuItem value='month'>개월</MenuItem>
                <MenuItem value='week'>주</MenuItem>
                <MenuItem value='day'>일</MenuItem>
                <MenuItem value='hour'>시간</MenuItem>
            </SelectAutoWidth>
            <Typography variant='h6' sx={{ mr: 2 }}>마다</Typography>
            <TextField
                type='number'
                InputLabelProps={{
                    shrink: true
                }}
                color='info'
                sx={{
                    width: 65,
                    mr: 0.5
                }}
            />
            <SelectAutoWidth>
                <MenuItem value='분'>분</MenuItem>
                <MenuItem value='초'>초</MenuItem>
            </SelectAutoWidth>
            <Typography variant='h6'>동안 {text}</Typography>
        </Stack>
    );
};

export default TypographyWithTimeNumberPicker;