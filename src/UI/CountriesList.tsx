import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';
import CountryItem from './CountryItem';

const StyledCountriesList = styled.div``;
const Container = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr 1fr;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid var(--color-grey-200);
  margin-bottom: 1.2rem;
`;
const Title = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-main);
  color: var(--color-grey-300);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function CountriesList() {
  const { filteredResults, isError, isLoading } = useCountries();

  if (isLoading) return <p>loading...</p>;
  if (isError) throw new Error('somethingwent wrong');

  return (
    <StyledCountriesList>
      <Container>
        <Title>Flag</Title>
        <Title>Name</Title>
        <Title>Population</Title>
        <Title>Area (km²)</Title>
        <Title>region</Title>
      </Container>
      <List>
        {filteredResults
          ?.map(country => (
            <CountryItem country={country} key={country.name.official} />
          ))
          .slice(1, 10)}
      </List>
    </StyledCountriesList>
  );
}

export default CountriesList;
