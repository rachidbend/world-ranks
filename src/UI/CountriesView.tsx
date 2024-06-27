import styled from 'styled-components';
import CountriesHeader from './CountriesHeader';
import CountriesList from './CountriesList';
import Filters from './Filters';

const StyledCountriesView = styled.div`
  padding: 3.2rem;
  background-color: var(--color-grey-100);
  margin: 0 4rem;
  position: relative;
  top: -5.2rem;

  border: 0.1rem solid var(--color-grey-200);
  border-radius: 1.2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  justify-content: start;
  align-items: start;
  gap: 3.2rem;
`;

function CountriesView() {
  return (
    <StyledCountriesView>
      {/* HEADER */}
      <CountriesHeader />
      {/* search box */}

      {/* MAIN */}
      <Container>
        {/* Filters and Sorting */}
        <Filters />
        {/* countries list */}
        <CountriesList />
      </Container>
    </StyledCountriesView>
  );
}

export default CountriesView;
