import styled from 'styled-components';
import { Contry } from '../helpers/helperTypes';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

interface CountryItemProps {
  country: Contry;
}

function CountryItem({ country }: CountryItemProps) {
  return (
    <StyledCountryItem key={country.name.official.toUpperCase()}>
      <Image src={country.flags.svg} alt={`flag of ${country.name.official}`} />
      <Text>
        <StyledLink to={`/country/${country.name.official}`}>
          {country.name.common}
        </StyledLink>
      </Text>
      <Text>{country.population}</Text>
      <Text>{country.area} </Text>
      <Text>{country.region} </Text>
    </StyledCountryItem>
  );
}

export default CountryItem;
