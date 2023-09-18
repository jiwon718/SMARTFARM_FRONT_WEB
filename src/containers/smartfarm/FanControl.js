import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FanControlComponent from '../../components/smartfarm/FanControl';
import { changeWork, changeAutoWork, changeAutoWorkPeriod, changeAutoWorkPeriodUnit, changeAutoWorkTime, changeAutoWorkTimeUnit } from '../../modules/smartfarm/fanControl';

const FanControl = () => {
    const fanControl = useSelector(state => state.fanControl);

    const dispatch = useDispatch();

    const onWorkChange = useCallback(e => {
        dispatch(changeWork(e.target.checked));
    }, [dispatch]);
    const onAutoWorkChange = useCallback(e => {
        dispatch(changeAutoWork(e.target.checked));
    }, [dispatch]);
    const onAutoWorkPeriodChange = useCallback(e => {
        dispatch(changeAutoWorkPeriod(e.target.value));
    }, [dispatch]);
    const onAutoWorkPeriodUnitChange = useCallback(e => {
        dispatch(changeAutoWorkPeriodUnit(e.target.value));
    }, [dispatch]);
    const onAutoWorkTimeChange = useCallback(e => {
        dispatch(changeAutoWorkTime(e.target.value));
    }, [dispatch]);
    const onAutoWorkTimeUnitChange = useCallback(e => {
        dispatch(changeAutoWorkTimeUnit(e.target.value));
    }, [dispatch]);

    return (
        <FanControlComponent
            fanControl={fanControl}
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