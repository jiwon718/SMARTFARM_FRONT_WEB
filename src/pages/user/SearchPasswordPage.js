import ContainerBox from '../../components/common/ContainerBox';
import TypographyPageName from '../../components/common/TypographyPageName';
import SearchPassword from '../../components/user/SearchPassword';

const SearchPasswordPage = () => {
    return (
        <ContainerBox maxWidth="xs">
            <TypographyPageName text="비밀번호 찾기"/>
            <SearchPassword />
        </ContainerBox>
    );
};

export default SearchPasswordPage;