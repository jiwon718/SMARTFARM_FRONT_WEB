import { Stack, Typography } from '@mui/material';
import IOSSwitch from '../common/IOSSwitch';

const TypographyWithSwitch = ({ text, disabled, checked, onChange, sx }) => {
    return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='space-between'
            sx={sx}
		>
			<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>{text}</Typography>
			<IOSSwitch
                color='info'
                sx={{ m: 1 }}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
		</Stack>
    )
}

export default TypographyWithSwitch;