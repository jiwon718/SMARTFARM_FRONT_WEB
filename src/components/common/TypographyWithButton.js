import { Stack, Typography, Button } from '@mui/material';

const TypographyWithButton = ({ text, sx }) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={sx}
        >
            <Typography variant='h6'>{text}</Typography>
            <Button variant='contained' color='info'>{text}</Button>
        </Stack>
    );
};

export default TypographyWithButton;