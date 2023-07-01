// 서버로 보낼 데이터 전처리(post)

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FanControlComponent from '../../components/smartfarm/FanControl';
import { getFan, postFan, changePower, changeWork, changeAutoWork, changeAutoWorkPeriod, changeAutoWorkPeriodUnit, changeAutoWorkTime, changeAutoWorkTimeUnit } from '../../modules/smartfarm/fanControl';

const FanControl = () => {
    const fanControl = useSelector(state => state.fanControl);

    const dispatch = useDispatch();

    const post = useCallback(() => {
        return {
            ...fanControl,
            /* 서버로 보낼 데이터 전처리 */
        }
    }, [fanControl]);

    const onPowerChange = useCallback(() => {
        dispatch(changePower());
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onWorkChange = useCallback(() => {
        dispatch(changeWork());
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onAutoWorkChange = useCallback(() => {
        dispatch(changeAutoWork());
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onAutoWorkPeriodChange = useCallback(e => {
        dispatch(changeAutoWorkPeriod(e.target.value));
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onAutoWorkPeriodUnitChange = useCallback(e => {
        dispatch(changeAutoWorkPeriodUnit(e.target.value));
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onAutoWorkTimeChange = useCallback(e => {
        dispatch(changeAutoWorkTime(e.target.value));
        dispatch(postFan(post()));
    }, [dispatch, post]);
    const onAutoWorkTimeUnitChange = useCallback(e => {
        dispatch(changeAutoWorkTimeUnit(e.target.value));
        dispatch(postFan(post()));
    }, [dispatch, post]);

    useEffect(() => {
        dispatch(getFan());
    }, [dispatch]);

    return (
        <FanControlComponent
            fanControl={fanControl}
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

export default React.memo(FanControl);