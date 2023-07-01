// 서버로 보낼 데이터 전처리(post)

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LedControlComponent from '../../components/smartfarm/LedControl';
import { getLed, postLed, changePower, changeWork, changeLevel, changeAutoWork, changeAutoWorkStartTime, changeAutoWorkEndTime } from '../../modules/smartfarm/ledControl';

const LedControl = () => {
    const ledControl = useSelector(state => state.ledControl);

    const dispatch = useDispatch();

    const post = useCallback(() => {
        return {
            ...ledControl,
            /* 서버로 보낼 데이터 전처리 */
        }
    }, [ledControl]);

    const onPowerChange = useCallback(() => {
        dispatch(changePower());
        dispatch(postLed(post()));
    }, [dispatch, post]);
    const onWorkChange = useCallback(() => {
        dispatch(changeWork());
        dispatch(postLed(post()));
    }, [dispatch, post]);
    const onLevelChange = useCallback(e => {
        dispatch(changeLevel(e.target.value));
        dispatch(postLed(post()));
    }, [dispatch, post]);
    const onAutoWorkChange = useCallback(() => {
        dispatch(changeAutoWork());
        dispatch(postLed(post()));
    }, [dispatch, post]);
    const onAutoWorkStartTimeChange = useCallback(newStartTime => {
        dispatch(changeAutoWorkStartTime(newStartTime));
        dispatch(postLed(post()));
    }, [dispatch, post]);
    const onAutoWorkEndTimeChange = useCallback(newEndTime => {
        dispatch(changeAutoWorkEndTime(newEndTime));
        dispatch(postLed(post()));
    }, [dispatch, post]);

    useEffect(() => {
        dispatch(getLed());
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