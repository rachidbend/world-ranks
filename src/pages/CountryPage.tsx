import styled from 'styled-components';
import BackgroundImage from '../UI/BackgroundImage';
import CountryView from '../UI/CountryView';

const StyledCountryPage = styled.div`
  min-height: 100vh;
  min-height: 100svh;

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
