import { Tooltip, IconButton } from '@mui/material';

const IconButtonWithTootip = ({ title, children }) => {
    return (
        <Tooltip title={title}>
            <IconButton size='medium' color="secondary">
                {children}
            </IconButton>
        </Tooltip>
    );
};

export default IconButtonWithTootip;