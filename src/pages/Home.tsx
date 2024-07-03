import styled from 'styled-components';
import BackgroundImage from '../UI/BackgroundImage';
import CountriesView from '../UI/CountriesView';

const StyledHome = styled.div`
  min-height: 100vh;
  min-height: 100svh;

  background-color: var(--color-grey-100);
`;

function Home() {
  return (
    <StyledHome>
      {/* background image */}
      <BackgroundImage />

      {/* app component */}
      <CountriesView />
    </StyledHome>
  );
}

export default Home;
