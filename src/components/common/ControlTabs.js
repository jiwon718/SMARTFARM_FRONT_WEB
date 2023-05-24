import { useState } from 'react';
import { ThemeProvider, createTheme, Box, Tabs, Tab } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTimePicker: {
            styleOverrides: {
                root: {
                    color: 'info'
                },
            },
        },
    },
});

const ControlTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper',position: 'fixed', bottom: 5 }}>
        <ThemeProvider theme={theme}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label="LED" sx={{ fontSize: 18 }} />
                <Tab label="관수 시스템" sx={{ fontSize: 18 }} />
                <Tab label="환풍기" sx={{ fontSize: 18 }} />
            </Tabs>
        </ThemeProvider>
      </Box>
    ); 
};

export default ControlTabs;