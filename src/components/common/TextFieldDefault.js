import { TextField } from '@mui/material';

const TextFieldDefault = ({ label, autoFocus, sx }) => {
    return (
        <TextField
            label={label}
            fullWidth
            color='info'
            margin='normal'
            autoFocus={autoFocus}
            sx={sx}
        />
    );
};

export default TextFieldDefault;