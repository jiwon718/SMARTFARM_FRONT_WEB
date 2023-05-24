import { Box, Typography } from '@mui/material';
import ControlCard from '../common/ControlCard';
import TypographyWithSwitch from '../common/TypographyWithSwitch';
import TypographyWithButton from '../common/TypographyWithButton';
import CheckBoxWithLabel from '../common/CheckBoxWithLabel';
import TypographyWithTimeNumberPicker from '../common/TypographyWithTimeNumberPicker';

const WateringSystemControl = () => {
    return (
        <div style={{ width: '100%'}} >
            <ControlCard>
                <TypographyWithSwitch text='전원 ON/OFF'/>
                <TypographyWithButton text='작동하기' sx={{ mt: 1.5 }}/>
                <CheckBoxWithLabel text='자동 작동하기' sx={{ mt: 1.5 }}/>
                <TypographyWithTimeNumberPicker text='작동하기' sx={{ mt: 1.5 }}/>
            </ControlCard>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h6' sx={{ mt: 6 }}>4시간 이후에 100초 동안 환풍기가 작동합니다.</Typography>
            </Box>
        </div>
    )
};

export default WateringSystemControl;