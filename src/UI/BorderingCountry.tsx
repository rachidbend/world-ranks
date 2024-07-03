import styled from 'styled-components';
import useGetCountryByCode from '../hooks/useGetCountryByCode';
import { Link } from 'react-router-dom';

const StyledBorderingCountry = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  /* align-items: center; */
`;

const Flag = styled.img`
  width: 8rem;
  height: 6rem;
  border-radius: 0.6rem;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  align-self: center;
`;
const Name = styled.p`
  font-family: var(--font-main);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-400);
`;

interface BorderingCountryProps {
  countryCode: string;
}

function BorderingCountry({ countryCode }: BorderingCountryProps) {
  const { borderingCountry, isError, isLoading } =
    useGetCountryByCode(countryCode);

  if (isLoading) return <p>loading...</p>;
  if (isError)
    throw new Error('there was an error fetching the bordering country');

  return (
    <StyledBorderingCountry to={`/country/${borderingCountry?.name.official}`}>
      <Flag src={borderingCountry?.flags.svg} />
      <Name>{borderingCountry?.name.common}</Name>
    </StyledBorderingCountry>
  );
}

export default BorderingCountry;
