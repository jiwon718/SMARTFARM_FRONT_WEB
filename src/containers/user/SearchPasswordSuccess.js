import { useNavigate } from 'react-router-dom';
import SearchPasswordSuccessComponent from '../../components/user/SearchPasswordSuccess';

const SearchPasswordSuccess = () => {
    const navigate = useNavigate();

    const goLogIn = () => {
        navigate(process.env.REACT_APP_SEARCH_PASSWORD_SUCCESS_PATH);
    };

    return (
        <SearchPasswordSuccessComponent goLogIn={goLogIn}/>
    );
};

export default SearchPasswordSuccess;