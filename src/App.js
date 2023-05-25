import { ThemeProvider } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import MyTheme from './MyTheme';
import LogInPage from './pages/user/LogInPage';
import VerificationPage from './pages/user/VerificationPage';
import SignUpPage from './pages/user/SignUpPage';
import SignUpSuccessPage from './pages/user/SignUpSuccessPage';
import SearchIdPage from './pages/user/SearchIdPage';
import SearchIdSuccessPage from './pages/user/SearchIdSuccessPage';
import SearchIdFailurePage from './pages/user/SearchIdFailurePage';
import SearchPasswordPage from './pages/user/SearchPasswordPage';
import SearchPasswordSuccessPage from './pages/user/SearchPasswordSuccessPage';
import SearchPasswordFailurePage from './pages/user/SearchPasswordFailurePage';
import HomePage from './pages/smartfarm/HomePage';
import NotRegisterSmartfarmPage from './pages/smartfarm/NotRegisterSmartfarmPage';
import NotRegisterPlantPage from './pages/smartfarm/NotRegisterPlantPage';
import RegisterSmartfarmPage from './pages/smartfarm/RegisterSmartfarmPage';
import RegisterSmartfarmSuccessPage from "./pages/smartfarm/RegisterSmartfarmSuccessPage";
import RegisterPlantPage from './pages/smartfarm/RegisterPlantPage';
import RegisterPlantSuccessPage from './pages/smartfarm/RegisterPlantSuccessPage';
import LedControlPage from "./pages/smartfarm/LedControlPage";
import WateringSystemControlPage from './pages/smartfarm/WateringSystemControlPage';
import FanControlPage from "./pages/smartfarm/FanControlPage";

const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Routes>
        <Route path="/" element={<LogInPage />}/>
        <Route path="/verification" element={<VerificationPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/signup/success" element={<SignUpSuccessPage />}/>
        <Route path="/search/id" element={<SearchIdPage />}/>
        <Route path="/search/id/success" element={<SearchIdSuccessPage />}/>
        <Route path="/search/id/failure" element={<SearchIdFailurePage />}/>
        <Route path="/search/password" element={<SearchPasswordPage />}/>
        <Route path="/search/password/success" element={<SearchPasswordSuccessPage />}/>
        <Route path="/search/password/failure" element={<SearchPasswordFailurePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/not/register/smartfarm" element={<NotRegisterSmartfarmPage />}/>
        <Route path="/not/register/plant" element={<NotRegisterPlantPage />}/>
        <Route path="/register/smartfarm" element={<RegisterSmartfarmPage />}/>
        <Route path="/register/smartfarm/success" element={<RegisterSmartfarmSuccessPage />}/>
        <Route path="/register/plant" element={<RegisterPlantPage />}/>
        <Route path="/register/plant/success" element={<RegisterPlantSuccessPage />}/>
        <Route path="/smartfarm/control/led" element={<LedControlPage />}/>
        <Route path="/smartfarm/control/wateringsystem" element={<WateringSystemControlPage />}/>
        <Route path="/smartfarm/control/fan" element={<FanControlPage />}/>
      </Routes>
    </ThemeProvider>
  )
};

export default App;