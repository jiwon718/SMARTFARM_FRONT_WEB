import { TextField } from '@mui/material';

const TextFieldDefault = ({ label, value, onChange, autoFocus, sx }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            color='info'
            margin='normal'
            autoFocus={autoFocus}
            sx={sx}
        />
    );
};

export default TextFieldDefault;