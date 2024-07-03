import styled from 'styled-components';
import BackgroundImage from '../UI/BackgroundImage';
import CountryView from '../UI/CountryView';

const StyledCountryPage = styled.div`
  height: 100vh;
  height: 100svh;

  background-color: var(--color-grey-100);
`;

function CountryPage() {
  return (
    <StyledCountryPage>
      {/* background image */}
      <BackgroundImage />

      {/* Country component */}
      <CountryView />
    </StyledCountryPage>
  );
}

export default CountryPage;
