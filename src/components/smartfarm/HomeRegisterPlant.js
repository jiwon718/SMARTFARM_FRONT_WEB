import { Box, Typography } from '@mui/material';
import TextWithEmoji from '../common/TextWithEmoji';
import ButtonDefault from '../common/ButtonDefault';
import plant from '../../lib/icon/plant.png';
import laugh from '../../lib/emoji/laugh.png';

const HomeRegisterPlant = ({ name, day }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <img
                src={plant}
                alt='작물'
                style={{
                    width: 150,
                    height: 150,
                    objectFit: 'cover'
                }}
            />
            <Typography
                variant='h5'
                sx={{ fontWeight: 'bold', mt: 3.5 }}
            >
                {name}와 {day}일 째
            </Typography>
            <ButtonDefault
                color='secondary'
                disabled={true}
                sx={{
                    mt: 3,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                text='수확'
            />
            <TextWithEmoji
                text='농부의 DNA가 흐르고 있네요'
                emoji={laugh}
                sx={{ mt: 3 }}
            />
            <Typography sx={{ mt: 0.5 }}>{name}는 건강하게 자라고 있으니 걱정마세요</Typography>
        </Box>
    );
};

export default HomeRegisterPlant;