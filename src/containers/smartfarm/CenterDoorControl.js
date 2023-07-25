import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CenterDoorControlComponent from '../../components/smartfarm/CenterDoorControl';
import { changePower, changeWork, changeAutoWork, changeAutoWorkPeriod, changeAutoWorkPeriodUnit, changeAutoWorkTime, changeAutoWorkTimeUnit } from '../../modules/smartfarm/centerDoorControl';

const CenterDoorControl = () => {
    const centerDoorControl = useSelector(state => state.centerDoorControl);

    const dispatch = useDispatch();

    const onPowerChange = useCallback(e => {
        dispatch(changePower(e.target.checked));
    }, [dispatch]);
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
        <CenterDoorControlComponent
            centerDoorControl={centerDoorControl}
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

export default React.memo(CenterDoorControl);