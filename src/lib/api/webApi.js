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

// 스마트팜 등록 요청
export const registerSmartfarm = ({
    smartfarmNumber: user_sf_id
}) => axios.post(process.env.REACT_APP_REGISTER_SMARTFARM_API_URL, new URLSearchParams({
    user_sf_id
}));