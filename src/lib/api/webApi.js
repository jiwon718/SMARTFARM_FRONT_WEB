import axios from 'axios';

// 회원가입
export const signup = ({
    id,
    password,
    name,
    phoneNumber
}) => axios.post(process.env.REACT_APP_SIGNUP_API_URL, {
    username: id,
    password,
    name: name,
    phone_number: phoneNumber
});

// 로그인
export const login = ({
    id,
    password,
    fcmToken
}) => axios.post(process.env.REACT_APP_LOGIN_API_URL, {
    username: id,
    password,
    fcm_webtoken: fcmToken
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
    name,
    phone_number: phoneNumber
});

// 비밀번호 찾기
export const searchPassword = ({
    name,
    phoneNumber,
    id
}) => axios.post(process.env.REACT_APP_SEARCH_PASSWORD_API_URL, {
    name,
    phone_number: phoneNumber,
    username: id
});

// 스마트팜 고유번호 확인
export const checkSmartfarmNumber = (smartfarmNumber) => axios.post(process.env.REACT_APP_CHECK_SMARTFARM_NUMBER_API_URL, {
    sfid: smartfarmNumber
})

// 스마트팜 등록
export const registerSmartfarm = ({
    token,
    smartfarmNumber
}) => axios.post(process.env.REACT_APP_REGISTER_SMARTFARM_API_URL, {
    sfid: smartfarmNumber
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 작물 등록
export const registerPlant = ({
    token,
    name,
    day
}) => axios.post(process.env.REACT_APP_REGISTER_PLANT_API_URL, {
    name,
    day
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 시스템 제어 - 원격 제어
export const remoteControl = ({
    token,
    datas
}) => axios.post(process.env.REACT_APP_REMOTE_CONTROL_API_URL, {
    remotepower: datas.remoteControl
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 시스템 제어 - LED
export const controlLed = ({
    token,
    datas
}) => axios.post(process.env.REACT_APP_CONTROL_LED_API_URL, {
    ledtoggle: datas.work,
    ledautotoggle: datas.autoWork,
    ledstarttimevalue: datas.autoWorkStartTime.get('h'),
    ledstartminutevalue: datas.autoWorkStartTime.get('m'),
    ledendtimevalue: datas.autoWorkEndTime.get('h'),
    ledendminutevalue: datas.autoWorkEndTime.get('m')
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 시스템 제어 - 관수 시스템
export const controlWateringSystem = ({
    token,
    datas
}) => axios.post(process.env.REACT_APP_CONTROL_WATERING_SYSTEM_API_URL, {
    waterpumptoggle: datas.work,
    waterpumprunningtime: datas.workTime,
    waterpumpautotoggle: datas.autoWork,
    waterpumpstarttime: datas.autoWorkPeriod
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 시스템 제어 - 환기팬
export const controlFan = ({
    token,
    datas
}) => axios.post(process.env.REACT_APP_CONTROL_FAN_API_URL, {
    fantoggle: datas.work,
    fanautotoggle: datas.autoWork,
    fanstarttimevalue: datas.autoWorkStartTime.get('h'),
    fanstartminutevalue: datas.autoWorkStartTime.get('m'),
    fanendtimevalue: datas.autoWorkEndTime.get('h'),
    fanendminutevalue: datas.autoWorkEndTime.get('m')
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 시스템 제어 - 중앙문
export const controlCenterDoor = ({
    token,
    datas
}) => axios.post(process.env.REACT_APP_CONTROL_CENTER_DOOR_API_URL, {
    doortoggle: datas.work,
    doorautotoggle: datas.autoWork,
    doorstarttimevalue: datas.autoWorkStartTime.get('h'),
    doorstartminutevalue: datas.autoWorkStartTime.get('m'),
    doorendtimevalue: datas.autoWorkEndTime.get('h'),
    doorendminutevalue: datas.autoWorkEndTime.get('m')
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

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

// 개인정보 가져오기
export const getPersonalInformation = (token) => axios.get(process.env.REACT_APP_GET_PERSONAL_INFORMATION_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 개인정보 수정
export const modifyPersonalInformation = ({
    token,
    tmpName,
    phoneNumber
}) => axios.put(process.env.REACT_APP_MODIFY_PERSONAL_INFORMATION_API_URL, {
    name: tmpName,
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

// 스마트팜 정보
export const getSmartfarm = (token) => axios.get(process.env.REACT_APP_GET_SMARTFARM_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 수정
export const modifySmartfarm = ({
    token,
    smartfarmNumber
}) => axios.put(process.env.REACT_APP_MODIFY_SMARTFARM_API_URL, {
    sfid: smartfarmNumber
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 스마트팜 삭제
export const removeSmartfarm = (token) => axios.delete(process.env.REACT_APP_REMOVE_SMARTFARM_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 작물 정보
export const getPlant = (token) => axios.get(process.env.REACT_APP_GET_PLANT_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 작물 수정
export const modifyPlant = ({
    token,
    name,
    day
}) => axios.put(process.env.REACT_APP_MODIFY_PLANT_API_URL, {
    name,
    day
}, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 작물 삭제
export const removePlant = (token) => axios.delete(process.env.REACT_APP_REMOVE_PLANT_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});

// 알람 리스트 가져오기
export const getSmartfarmAlarmList = (token) => axios.get(process.env.REACT_APP_GET_ALARM_LIST_API_URL, {
    headers: {
        Authorization: `Token ${token}`
    }
});