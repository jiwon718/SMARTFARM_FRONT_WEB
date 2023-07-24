import { useNavigate } from 'react-router-dom';
import SearchIdSuccessComponent from '../../components/user/SearchIdSuccess';

const SearchIdSuccess = () => {
    const navigate = useNavigate();

    const goSearchPassword = () => {
        navigate(process.env.REACT_APP_SEARCH_PASSWORD_PATH);
    };
    const goLogIn = () => {
        navigate(process.env.REACT_APP_LOGIN_PATH);
    };

    return (
        <SearchIdSuccessComponent
            goSearchPassword={goSearchPassword}
            goLogIn={goLogIn}
        />
    );
};

export default SearchIdSuccess;