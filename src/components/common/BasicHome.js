// SERVER: 서버에서 스마트팜 내부환경 상태(온도(temperature), 습도(humidity)) 요청

import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import MyCard from './MyCard';
import bulb from '../../lib/icon/bulb.png';
import raindrops from '../../lib/icon/raindrops.png';
import wind from '../../lib/icon/wind.png';
import door from '../../lib/icon/door.png';


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

const BasicHome = ({
    children,
    temperature,
    humidity,
    ledStatus,
    wateringSystemStatus,
    fanStatus,
    centerDoorStatus
}) => {
    return (
        <div style={{ width: '100%' }}>
            {children}
            <MyCard sx={{ width: '100%', mt: 6, mb: 4 }}>
                <Environment
                    name='온도'
                    value={`${temperature}℃`}
                    sx={{ mb: 1 }}
                />
                <Environment name='습도' value={`${humidity}%`}/>
            </MyCard>
            <MyCard sx={{ width: '100%' }}>
                <System
                    image={bulb}
                    imageLink={process.env.REACT_APP_CONTROL_LED_PATH}
                    title='LED'
                    text={ledStatus}
                    sx={{ mb: 2 }}
                />
                <System
                    image={raindrops}
                    imageLink={process.env.REACT_APP_CONTROL_WATERING_SYSTEM_PATH}
                    title='관수 시스템'
                    text={wateringSystemStatus}
                    sx={{ mb: 2 }}
                />
                <System
                    image={wind}
                    imageLink={process.env.REACT_APP_CONTROL_FAN_PATH}
                    title='환기팬'
                    text={fanStatus}
                    sx={{ mb: 2 }}
                />
                <System
                    image={door}
                    imageLink={process.env.REACT_APP_CONTROL_CENTER_DOOR_PATH}
                    title='중앙문'
                    text={centerDoorStatus}
                />
            </MyCard>
        </div>
    )
};

export default BasicHome;