import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SettingSmartfarmComponent from '../../components/setting/SettingSmartfarm';
import { changeSmartfarmNumber, changeSuccess } from '../../modules/smartfarm/smartfarm';

const SettingSmartfarm = () => {
    const smartfarm = useSelector(state => state.smartfarm);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSmartfarmNumberChange = useCallback(e => dispatch(changeSmartfarmNumber(e.target.value)), [dispatch]);
    const onSuccessChange = useCallback(() => dispatch(changeSuccess()), [dispatch]);

    const onModifyClick = () => {
        console.log('SERVER: 스마트팜 수정 요청');
    };
    const onOpenClick = () => {
        setOpen(true);
    };
    const onYesClick = () => {
        console.log('SERVER: 스마트팜 삭제 요청');
        navigate(process.env.REACT_APP_REMOVE_SMARTFARM_SUCCESS_PATH);
    };
    const onNoClick = () => {
        setOpen(false);
    }
    const goBack = () => {
        navigate(process.env.REACT_APP_SETTING_PATH);
    };

    return (
        <SettingSmartfarmComponent
            smartfarm={smartfarm}
            open={open}
            onSmartfarmNumberChange={onSmartfarmNumberChange}
            onSuccessChange={onSuccessChange}
            onModifyClick={onModifyClick}
            onOpenClick={onOpenClick}
            onYesClick={onYesClick}
            onNoClick={onNoClick}
            goBack={goBack}
        />
    );
};

export default React.memo(SettingSmartfarm);