import { Grid, TextField, Button } from '@mui/material';

const TextFieldWithButton = ({ textFieldLabel, textFieldDisabled, buttonDisabled, buttonText }) => {
    return (
        <Grid item xs={12}>
            <Grid container columnSpacing={1.5}>
                <Grid item xs={8}>
                    <TextField
                        label={textFieldLabel}
                        fullWidth
                        color="info"
                        disabled={textFieldDisabled}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        disabled={buttonDisabled}
                        color="secondary"
                        fullWidth
                        sx={{ height: '100%' }}
                    >
                        {buttonText}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TextFieldWithButton;