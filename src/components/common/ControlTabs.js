import { NavLink } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import './ControlTabs.css';

const ControlTabs = ({ tabNumber }) => {
    const activeStyle = {
        color: '#2196f3'

    };

    return (
        <Box sx={{ width: '100%', position: 'fixed', bottom: 10 }}>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                spacing={3}
            >
                <NavLink
                    to="/smartfarm/control/led"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    LED
                </NavLink>
                <NavLink
                    to="/smartfarm/control/wateringsystem"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    관수 시스템
                </NavLink>
                <NavLink
                    to="/smartfarm/control/fan"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    환기팬
                </NavLink>
            </Stack>
        </Box>
    )
};

export default ControlTabs;