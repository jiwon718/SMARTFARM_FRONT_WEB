// 스마트팜 상태(온도, 습도)와 관련하여 화면 기능 구현하기

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

const BasicHome = ({ children, ledStatus, wateringSystemStatus, fanStatus }) => {
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
                    text={ledStatus}
                    sx={{ mb: 2 }}
                />
                <System
                    image={raindrops}
                    imageLink='/smartfarm/control/wateringsystem'
                    title='관수 시스템'
                    text={wateringSystemStatus}
                    sx={{ mb: 2 }}
                />
                <System
                    image={wind}
                    imageLink='/smartfarm/control/fan'
                    title='환풍기'
                    text={fanStatus}
                />
            </ControlCard>
        </div>
    )
};

export default BasicHome;