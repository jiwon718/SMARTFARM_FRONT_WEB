// 서버로 보낼 데이터 전처리(post)

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WateringSystemControlComponent from '../../components/smartfarm/WateringSystemControl';
import { getWateringSystem, postWateringSystem, changePower, changeWork, changeAutoWork, changeAutoWorkPeriod, changeAutoWorkPeriodUnit, changeAutoWorkTime, changeAutoWorkTimeUnit } from '../../modules/smartfarm/wateringSystemControl';

const WateringSystemControl = () => {
    const wateringSystemControl = useSelector(state => state.wateringSystemControl);

    const dispatch = useDispatch();

    const post = useCallback(() => {
        return {
            ...wateringSystemControl,
            /* 서버로 보낼 데이터 전처리 */
        }
    }, [wateringSystemControl]);

    const onPowerChange = useCallback(() => {
        dispatch(changePower());
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onWorkChange = useCallback(() => {
        dispatch(changeWork());
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onAutoWorkChange = useCallback(() => {
        dispatch(changeAutoWork());
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onAutoWorkPeriodChange = useCallback(e => {
        dispatch(changeAutoWorkPeriod(e.target.value));
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onAutoWorkPeriodUnitChange = useCallback(e => {
        dispatch(changeAutoWorkPeriodUnit(e.target.value));
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onAutoWorkTimeChange = useCallback(e => {
        dispatch(changeAutoWorkTime(e.target.value));
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);
    const onAutoWorkTimeUnitChange = useCallback(e => {
        dispatch(changeAutoWorkTimeUnit(e.target.value));
        dispatch(postWateringSystem(post()));
    }, [dispatch, post]);

    useEffect(() => {
        dispatch(getWateringSystem());
    }, [dispatch]);

    return (
        <WateringSystemControlComponent
            wateringSystemControl={wateringSystemControl}
            onPowerChange={onPowerChange}
            onWorkChange={onWorkChange}
            onAutoWorkChange={onAutoWorkChange}
            onAutoWorkPeriodChange={onAutoWorkPeriodChange}
            onAutoWorkPeriodUnitChange={onAutoWorkPeriodUnitChange}
            onAutoWorkTimeChange={onAutoWorkTimeChange}
            onAutoWorkTimeUnitChange={onAutoWorkTimeUnitChange}
        />
    );
};

export default React.memo(WateringSystemControl);