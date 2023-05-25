import { Box, Typography } from '@mui/material';
import ControlCard from '../common/ControlCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithNumberPicker from '../common/TypographyWithNumberPicker';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimePicker from '../common/TypographyWithTimePicker';

const LedControl = () => {
    return (
        <div style={{ width: '100%'}} >
            <ControlCard sx={{ width: '100%' }}>
                <TypographyWithSwitch text='전원 ON/OFF'/>
                <TypographyWithSwitch text='켜기/끄기' sx={{ mt: 1.5 }}/>
                <TypographyWithNumberPicker text='밝기' sx={{ mt: 1.5 }}/>
                <CheckBoxWithLabel text='자동 작동하기' sx={{ mt: 1.5}}/>
                <TypographyWithTimePicker text='켜기'/>
                <TypographyWithTimePicker text='끄기' sx={{ mt: 0.3 }}/>
            </ControlCard>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h6' sx={{ mt: 6 }}>현재 LED는 3단계 밝기로 켜져 있습니다.</Typography>
            </Box>
        </div>
    );
};

export default LedControl;