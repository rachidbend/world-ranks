import styled from 'styled-components';
import { useCountries } from '../context/CountriesContext';

const StyledNumOfResults = styled.div``;
const Text = styled.p`
  font-family: var(--font-main);
  color: var(--color-grey-300);
  font-size: 1.6rem;
  font-weight: 600;
`;

function NumOfResults() {
  const { numOfResults } = useCountries();

  return (
    <StyledNumOfResults>
      <Text>Found {numOfResults} countries</Text>
    </StyledNumOfResults>
  );
}

export default NumOfResults;
