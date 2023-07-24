import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LedControlComponent from '../../components/smartfarm/LedControl';
import { changePower, changeWork, changeLevel, changeAutoWork, changeAutoWorkStartTime, changeAutoWorkEndTime } from '../../modules/smartfarm/ledControl';

const LedControl = () => {
    const ledControl = useSelector(state => state.ledControl);

    const dispatch = useDispatch();

    const onPowerChange = useCallback(e => {
        dispatch(changePower(e.target.checked));
    }, [dispatch]);
    const onWorkChange = useCallback(e => {
        dispatch(changeWork(e.target.checked));
    }, [dispatch]);
    const onLevelChange = useCallback(e => {
        dispatch(changeLevel(e.target.value));
    }, [dispatch]);
    const onAutoWorkChange = useCallback(e => {
        dispatch(changeAutoWork(e.target.checked));
    }, [dispatch]);
    const onAutoWorkStartTimeChange = useCallback(newStartTime => {
        dispatch(changeAutoWorkStartTime(newStartTime));
    }, [dispatch]);
    const onAutoWorkEndTimeChange = useCallback(newEndTime => {
        dispatch(changeAutoWorkEndTime(newEndTime));
    }, [dispatch]);

    return (
        <LedControlComponent
            ledControl={ledControl}
            onPowerChange={onPowerChange}
            onWorkChange={onWorkChange}
            onLevelChange={onLevelChange}
            onAutoWorkChange={onAutoWorkChange}
            onAutoWorkStartTimeChange={onAutoWorkStartTimeChange}
            onAutoWorkEndTimeChange={onAutoWorkEndTimeChange}
        />
    );
};

export default React.memo(LedControl);