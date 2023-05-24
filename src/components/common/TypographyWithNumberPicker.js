import { Stack, Typography, TextField } from '@mui/material';

const TypographyWithNumberPicker = ({ text, sx }) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={sx}
        >
            <Typography variant='h6'>{text}</Typography>
            <TextField
                type='number'
                InputLabelProps={{
                    shrink: true
                }}
                color='info'
                sx={{
                    width: 65
                }}
            />
        </Stack>
    );
};

export default TypographyWithNumberPicker;