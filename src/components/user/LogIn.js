// 로그인 버튼 기능 추가하기

import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import TextFieldDefault from '../common/TextFieldDefault';
import TextFieldPassword from '../../containers/common/TextFieldPassword';
import ButtonDefault from '../common/ButtonDefault';

const LogIn = () => {
    const navigate = useNavigate();

    const goVerification = () => {
        navigate('/verification');
    };

    return (
        <div>
            <TextFieldDefault label="아이디" autoFocus={true}/>
            <TextFieldPassword inputLabel="비밀번호"/>
            <ButtonDefault
                sx={{
                    mt: 4,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }}
                text="로그인"
            />
            <ButtonDefault
                color="secondary"
                sx={{
                    mb: 4,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goVerification}
                text="회원가입"
            />
            <Grid container>
                <Grid item xs >
                    <Link
                        to="/search/id"
                        style={{
                            textDecoration: 'none',
                            color: '#000000'
                        }}
                    >
                        아이디 찾기
                    </Link>
                </Grid>
                <Grid item>
                    <Link
                        to="/search/password"
                        style={{
                            textDecoration: 'none',
                            color: '#000000'
                        }}
                    >
                        비밀번호 찾기
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default LogIn;