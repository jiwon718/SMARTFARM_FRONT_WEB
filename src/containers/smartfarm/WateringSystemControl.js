import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WateringSystemControlComponent from '../../components/smartfarm/WateringSystemControl';
import { changeWork, changeAutoWork, changeAutoWorkPeriod, changeAutoWorkPeriodUnit, changeAutoWorkTime, changeAutoWorkTimeUnit } from '../../modules/smartfarm/wateringSystemControl';

const WateringSystemControl = () => {
    const wateringSystemControl = useSelector(state => state.wateringSystemControl);

    const dispatch = useDispatch();

    const onWorkChange = useCallback(() => {
        dispatch(changeWork());
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
        <WateringSystemControlComponent
            wateringSystemControl={wateringSystemControl}
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