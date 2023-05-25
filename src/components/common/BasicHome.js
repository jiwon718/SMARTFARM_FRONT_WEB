import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import ControlCard from './ControlCard';
import bulb from '../../lib/emoji/bulb.png';
import raindrops from '../../lib/emoji/raindrops.png';
import wind from '../../lib/emoji/wind.png';


const Environment = ({ name, value, sx }) => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={sx}
        >
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='h6'>{value}</Typography>
        </Stack>
    );
};

const System = ({ image, imageLink, title, text, sx }) => {
    return (
        <Link
            to={imageLink}
            style={{
                textDecoration: 'none',
                color: '#000000'
            }}
        >
        <Stack
            direction='row'
            alignItems='center'
            sx={sx}
        >
            <img
                src={image}
                alt={title}
                style={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover'
                }}
            />
            <Stack
                direction='column'
                sx={{ ml: 2 }}
            >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography variant='subtitle1'>{text}</Typography>
            </Stack>
        </Stack>
        </Link>
    );
};

const BasicHome = ({ children }) => {
    return (
        <div style={{ width: '100%' }}>
            {children}
            <ControlCard sx={{ width: '100%', mt: 6, mb: 4 }}>
                <Environment
                    name='온도'
                    value='20℃'
                    sx={{ mb: 1 }}
                />
                <Environment name='습도' value='72%'/>
            </ControlCard>
            <ControlCard sx={{ width: '100%' }}>
                <System
                    image={bulb}
                    imageLink='/smartfarm/control/led'
                    title='LED'
                    text='현재 LED는 3단계 밝기로 켜져 있어요'
                    sx={{ mb: 2 }}
                />
                <System
                    image={raindrops}
                    imageLink='/smartfarm/control/wateringsystem'
                    title='관수 시스템'
                    text='1시간 이후에 30초 동안 물을 뿌려요'
                    sx={{ mb: 2 }}
                />
                <System
                    image={wind}
                    imageLink='/smartfarm/control/fan'
                    title='환풍기'
                    text='4시간 이후에 100초 동안 환풍기가 작동해요'
                />
            </ControlCard>
        </div>
    )
};

export default BasicHome;