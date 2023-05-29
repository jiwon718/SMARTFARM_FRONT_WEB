import { TextField } from '@mui/material';

const TextFieldDefault = ({ disabled, label, value, onChange, autoFocus, sx }) => {
    return (
        <TextField
            disabled={disabled}
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