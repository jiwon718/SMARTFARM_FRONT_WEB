import axios from 'axios';

// 회원가입
export const signup = ({
    id: loginId,
    password,
    passwordCheck,
    name: nickname
}) => axios.post(process.env.REACT_APP_SIGNUP_API_URL, new URLSearchParams({
    loginId,
    password,
    passwordCheck,
    nickname
}));

// 로그인
export const login = ({
    id: loginId,
    password
}) => axios.post(process.env.REACT_APP_LOGIN_API_URL, new URLSearchParams({
    loginId,
    password
}));

// 스마트팜 고유번호 확인
export const checkSmartfarmNumber = ({
    smartfarmNumber: user_sf_id
}) => axios.post(process.env.REACT_APP_CHECK_SMARTFARM_API_URL, new URLSearchParams({
    user_sf_id
}));

// 스마트팜 등록
export const registerSmartfarm = ({
    smartfarmNumber: user_sf_id
}) => axios.post(process.env.REACT_APP_REGISTER_SMARTFARM_API_URL, new URLSearchParams({
    user_sf_id
}));

// 작물 등록
export const registerPlant = ({
    name: cropname,
    day: period
}) => axios.post(process.env.REACT_APP_REGISTER_PLANT_API_URL, new URLSearchParams({
    cropname,
    period
}));

// 스마트팜 시스템 제어 - 원격 제어
export const remoteControl = (datas) => {
    console.log(datas);
}

// 스마트팜 시스템 제어 - LED
export const controlLed = (datas) => {
    console.log(datas);
};

// 스마트팜 시스템 제어 - 관수 시스템
export const controlWateringSystem = (datas) => {
    console.log(datas);
}

// 스마트팜 시스템 제어 - 환기팬
export const controlFan = (datas) => {
    console.log(datas);
}

// 스마트팜 시스템 제어 - 중앙문
export const controlCenterDoor = (datas) => {
    console.log(datas);
}