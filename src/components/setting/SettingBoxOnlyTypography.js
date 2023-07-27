import { Typography } from '@mui/material';
import MyCard from '../common/MyCard';

const SettingBoxOnlyTypography = ({ image, title, children, sx }) => {
    return (
        <MyCard sx={sx}>
            <Typography variant='h6'>{title}</Typography>
            {children}
        </MyCard>
    );
};

export default SettingBoxOnlyTypography;