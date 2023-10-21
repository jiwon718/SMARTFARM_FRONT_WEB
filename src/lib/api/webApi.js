import axios from 'axios';

// 회원가입
export const signup = ({
    id,
    password,
    passwordCheck,
    name,
    phoneNumber
}) => axios.post(process.env.REACT_APP_SIGNUP_API_URL, {
    user_id: id,
    password,
    passwordCheck,
    user_name: name,
    phone_number: phoneNumber
});

// 로그인
export const login = ({
    id,
    password
}) => axios.post(process.env.REACT_APP_LOGIN_API_URL, {
    user_id: id,
    password
});

// 토큰 유효 확인
export const check = (token) => axios.get(process.env.REACT_APP_CHECK_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 아이디 찾기
export const searchId = ({
    name,
    phoneNumber
}) => axios.post(process.env.REACT_APP_SEARCH_ID_API_URL, {
    user_name: name,
    phone_number: phoneNumber
});

// 비밀번호 찾기
export const searchPassword = ({
    name,
    phoneNumber,
    id
}) => axios.post(process.env.REACT_APP_SEARCH_PASSWORD_API_URL, {
    user_name: name,
    phone_number: phoneNumber,
    user_id: id
});

// 스마트팜 고유번호 확인
export const checkSmartfarmNumber = (smartfarmNumber) => {
    console.log(smartfarmNumber);
}

// 스마트팜 등록
export const registerSmartfarm = ({
    token,
    smartfarmNumber
}) => {
    console.log(token, smartfarmNumber);
};

// 작물 등록
export const registerPlant = ({
    name,
    day
}) => {
    console.log(name, day);
};

// 스마트팜 시스템 제어 - 원격 제어
export const remoteControl = ({
    token,
    datas
}) => {
    console.log(token);
    console.log(datas);
}

// 스마트팜 시스템 제어 - LED
export const controlLed = ({
    token,
    datas
}) => {
    console.log(token, datas);
};

// 스마트팜 시스템 제어 - 관수 시스템
export const controlWateringSystem = ({
    token,
    datas
}) => {
    console.log(token, datas);
};

// 스마트팜 시스템 제어 - 환기팬
export const controlFan = ({
    token,
    datas
}) => {
    console.log(token, datas);
};

// 스마트팜 시스템 제어 - 중앙문
export const controlCenterDoor = ({
    token,
    datas
}) => {
    console.log(token, datas);
};

// 비밀번호 확인
export const verify = ({
    token,
    password
}) => axios.post(process.env.REACT_APP_VERIFY_API_URL, {
    password
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 비밀번호 수정
export const modifyPassword = ({
    token,
    password
}) => axios.put(process.env.REACT_APP_MODIFY_PASSWORD_API_URL, {
    password
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 개인정보 수정
export const modifyPersonalInformation = ({
    token,
    name,
    phoneNumber
}) => axios.put(process.env.REACT_APP_MODIFY_PERSONAL_INFORMATION_API_URL, {
    user_name: name,
    phone_number: phoneNumber
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 회원 탈퇴
export const withdraw = ({
    token,
    password
}) => axios.delete(process.env.REACT_APP_WITHDRAW_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    },
    data: {
        password
    }
});

// 스마트팜 수정
export const modifySmartfarm = ({
    token,
    datas
}) => {
    console.log(token, datas);
}

// 스마트팜 삭제
export const removeSmartfarm = (token) => {
    console.log(token);
}

// 작물 수정
export const modifyPlant = ({
    token,
    name,
    day
}) => {
    console.log(token, name, day);
}

// 작물 삭제
export const removePlant = (token) => {
    console.log(token);
}

// 설정
export const setting = (datas) => {
    console.log(datas);
}