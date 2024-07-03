import styled from 'styled-components';
import useGetCountryByCode from '../hooks/useGetCountryByCode';

const StyledBorderingCountry = styled.div``;

const Flag = styled.img`
  width: 6rem;
  height: auto;
  overflow: hidden;
`;
const Name = styled.p``;

interface BorderingCountryProps {
  countryCode: string;
}

function BorderingCountry({ countryCode }: BorderingCountryProps) {
  const { borderingCountry, isError, isLoading } =
    useGetCountryByCode(countryCode);

  if (isLoading) return <p>loading...</p>;
  if (isError)
    throw new Error('there was an error fetching the bordering country');
  console.log(borderingCountry);
  return (
    <StyledBorderingCountry>
      <Flag src={borderingCountry?.flags.svg} />
      <Name>{borderingCountry?.name.common}</Name>
    </StyledBorderingCountry>
  );
}

export default BorderingCountry;
