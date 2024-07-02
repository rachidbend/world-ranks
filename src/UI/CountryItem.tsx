import styled from 'styled-components';
import { Contry } from '../helpers/helperTypes';

const StyledCountryItem = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1fr 1fr 1fr;
`;

const Image = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 0.4rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-400);
  font-family: var(--font-main);
`;

interface CountryItemProps {
  country: Contry;
}

function CountryItem({ country }: CountryItemProps) {
  return (
    <StyledCountryItem key={country.name.official.toUpperCase()}>
      <Image src={country.flags.svg} alt={`flag of ${country.name.official}`} />
      <Text>{country.name.common}</Text>
      <Text>{country.population}</Text>
      <Text>{country.area} </Text>
      <Text>{country.region} </Text>
    </StyledCountryItem>
  );
}

export default CountryItem;
