import { Card, CardContent } from '@mui/material';

const ControlCard = ({ sx, children }) => {
    return (
        <Card sx={sx}>
            <CardContent sx={{ margin: 2 }}>
                {children}
            </CardContent>
        </Card>
    );
};

export default ControlCard;