import styled from 'styled-components';
import SearchBox from './SearchBox';
import NumOfResults from './NumOfResults';

const StyledCountriesHeader = styled.header``;

function CountriesHeader() {
  return (
    <StyledCountriesHeader>
      <NumOfResults />
      <SearchBox />
    </StyledCountriesHeader>
  );
}

export default CountriesHeader;
