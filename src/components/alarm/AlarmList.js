// 서버에서 알람 정보 가지고 오기
// alarm.time: (현재 시각) - (알람 발생 시각)
// 알람 취소 다이어그램에서 '예' 버튼 클릭 시 DB에서 해당 알람 삭제하기

import { useState } from 'react';
import { Stack, Typography, Divider, Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import MyCard from '../common/MyCard';
import profile from '../../lib/icon/profile.png';
import greenhouse from '../../lib/icon/greenhouse.png';
import plant from '../../lib/icon/plant.png';

const AlarmBox = ({ image, title, children, sx }) => {
    return (
        <MyCard sx={sx}>
            <Stack
                direction='row'
                alignItems='center'
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover'
                    }}
                />
                <Typography variant='h6' sx={{ ml: 2 }}>{title}</Typography>
            </Stack>
            <Stack
                direction='column'
                divider={<Divider orientation="horizontal" flexItem />}
                sx={{ mt: 2 }}
            >
                {children}
            </Stack>
        </MyCard>
    );
};

const AlarmItem = ({ alarm }) => {
    const [open, setOpen] = useState(false);

    const onOpenClick = () => {
        setOpen(true);
    };

    const onYesClick = () => {
        setOpen(false);
        console.log('DB: 해당 알람 삭제');
    };

    const onNoClick = () => {
        setOpen(false);
    }

    return (
        <div>
        <Stack
            direction='column'
            sx={{
                mt: 1,
                mb: 1,
                cursor: 'pointer'
        }}
            onClick={onOpenClick}
        >
            <Typography variant='subtitle1'>{alarm.text}</Typography>
            <Typography variant='overline' sx={{ textAlign: 'right' }}>{alarm.time}</Typography>
        </Stack>
        <Dialog
            open={open}
            onClose={onNoClick}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>
                {'해당 알람을 삭제하시겠습니까?'}
            </DialogTitle>
            <DialogActions>
                <Button onClick={onNoClick}>아니요</Button>
                <Button onClick={onYesClick}>예</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
};

const AlarmList = () => {
    const userAlarm = null;
    const SmartFarmAlarm = [
        { id: 1, text: '현장 제어 모드로 설정하셨습니다.', time: '15분 전' }
    ];
    const PlantAlarm = [
        { id: 1, text: '작물을 키우기 시작하셨습니다.', time: '10일 전' },
        { id: 2, text: '작물 이름을 \'새싹이\'로 변경하셨습니다.', time: '3일 전'}
    ];

    return (
        <div style={{ width: '100%'}}>
            <AlarmBox
                image={profile}
                title='사용자'
                sx={{ mb: 4 }}
            >
                { userAlarm && userAlarm.map((alarm) => <AlarmItem key={alarm.id} alarm={alarm}/>)}
            </AlarmBox>
            <AlarmBox
                image={greenhouse}
                title='스마트팜'
                sx={{ mb: 4 }}
            >
                { SmartFarmAlarm && SmartFarmAlarm.map((alarm) => <AlarmItem key={alarm.id} alarm={alarm}/>)}
            </AlarmBox>
            <AlarmBox
                image={plant}
                title='작물'
            >
                { PlantAlarm && PlantAlarm.map((alarm) => <AlarmItem key={alarm.id} alarm={alarm}/>)}
            </AlarmBox>
        </div>
    )
}

export default AlarmList;