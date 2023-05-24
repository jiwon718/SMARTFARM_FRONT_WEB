import { Card, CardContent } from '@mui/material';

const ControlCard = ({ children }) => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent sx={{ margin: 2 }}>
                {children}
            </CardContent>
        </Card>
    );
};

export default ControlCard;