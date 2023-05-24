import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const TextFieldPassword = ({ inputLabel, showPassword, onClickShowPassword, onMouseDownPassword }) => {
    return (
        <FormControl 
            variant="outlined"
            fullWidth
            margin="normal"
        >
            <InputLabel htmlFor="outlined-adornment-password" color="info">{inputLabel}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                label={inputLabel}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={onClickShowPassword}
                            onMouseDown={onMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                        </IconButton>
                    </InputAdornment>
                }
                color="info"
            />
        </FormControl>
    );
};

export default TextFieldPassword;