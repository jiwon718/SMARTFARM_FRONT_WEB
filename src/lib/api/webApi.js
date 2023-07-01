import axios from 'axios';

// server → client: 스마트팜 내부 환경 및 장치 데이터 가져오기
export const getSmartfarmData = () => axios.get(/*'<URL>'*/);

// server → client: 작물 데이터 가져오기
export const getPlantData = () => axios.get(/*'<URL>'*/);
// client → server: 작물 데이터 보내기
export const postPlantData = (/*{<DATA>}*/) => axios.post(/*'<URL>', {<DATA>}*/);

// server → client: LED 데이터 가져오기
export const getLedData = () => axios.get(/*'<URL>'*/);
// client → server: LED 데이터 보내기
export const postLedData = (/*{<DATA>}*/) => axios.post(/*'<URL>', {<DATA>}*/);

// server → client: 관수 시스템 데이터 가져오기
export const getWateringSystemData = () => axios.get(/*'<URL>'*/);
// client → server: 관수 시스템 데이터 보내기
export const postWateringSystemData = (/*{<DATA>}*/) => axios.post(/*'<URL>', {<DATA>}*/);

// server → client: 환기팬 데이터 가져오기
export const getFanData = () => axios.get(/*'<URL>'*/);
// client → server: 환기팬 데이터 보내기
export const postFanData = (/*{<DATA>}*/) => axios.post(/*'<URL>', {<DATA>}*/);