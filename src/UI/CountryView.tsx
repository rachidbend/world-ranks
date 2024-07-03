import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetCountryData from '../hooks/useGetCountryData';
import BorderingCountry from './BorderingCountry';
import { getCurrencies, getLanguages } from '../helpers/helperFunctions';

const StyledCountryView = styled.div`
  width: 60rem;
  border: 0.1rem solid var(--color-grey-200);
  margin: 0 auto;
  position: relative;
  top: -5rem;
  background-color: var(--color-grey-100);
  border-radius: 1.2rem;
  font-family: var(--font-main);
  color: var(--color-grey-400);
`;

const FlagContainer = styled.div`
  margin-top: -4rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
`;
const Flag = styled.img`
  width: 24rem;
  height: auto;
  display: inline-block;
  border-radius: 1.2rem;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2.4rem;
`;
const CommonName = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
`;
const OfficialName = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.4rem;
  align-items: center;
  margin-bottom: 2.4rem;
`;
const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background-color: var(--color-grey-200);
  border-radius: 0.8rem;
  gap: 1rem;
`;
const StatText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.4rem;
  letter-spacing: 0.06rem;
`;
const StatSeperator = styled.span`
  display: inline-block;
  width: 0.1rem;
  height: 3rem;
  background-color: var(--color-grey-100);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1.2rem; */
  border-top: 0.1rem solid var(--color-grey-200);
`;
const InfoTitle = styled.p`
  padding: 2rem 1.4rem;
  letter-spacing: 0.05rem;
  color: var(--color-grey-300);
  text-transform: capitalize;
  font-size: 1.2rem;
  font-size: 500;
`;
const InfoValue = styled.p`
  padding: 2rem 1.4rem;
  letter-spacing: 0.05rem;
  color: var(--color-grey-400);
  text-transform: capitalize;
  font-size: 1.2rem;
  font-size: 500;
`;

/**
 * Displays the data of a country
 * @returns
 */
function CountryView() {
  const { name } = useParams();

  const { countryData, isLoading, isError } = useGetCountryData(
    name ? name : ''
  );

  if (isLoading) return <p>Loading data...</p>;
  if (isError) throw new Error('There was an error');

  return (
    <StyledCountryView>
      <FlagContainer>
        <Flag src={countryData?.flags.svg} />
      </FlagContainer>
      <NameContainer>
        <CommonName>{countryData?.name.common}</CommonName>

        <OfficialName>{countryData?.name.official}</OfficialName>
      </NameContainer>
      <StatsContainer>
        <Stat>
          <StatText>Population</StatText>
          <StatSeperator></StatSeperator>
          <StatText>
            {new Intl.NumberFormat().format(
              countryData?.population ? countryData?.population : 0
            )}
          </StatText>
        </Stat>
        <Stat>
          <StatText>Area (km²)</StatText>
          <StatSeperator></StatSeperator>
          <StatText>
            {new Intl.NumberFormat().format(
              countryData?.area ? countryData?.area : 0
            )}
          </StatText>
        </Stat>
      </StatsContainer>
      <InfoContainer>
        <Info>
          <InfoTitle>Capital</InfoTitle>
          <InfoValue>{countryData?.capital}</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Subregion</InfoTitle>
          <InfoValue>{countryData?.subregion}</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Languages</InfoTitle>
          <InfoValue>
            {getLanguages(countryData?.languages ? countryData?.languages : {})}
          </InfoValue>
        </Info>
        <Info>
          <InfoTitle>Currencies</InfoTitle>
          <InfoValue>
            {getCurrencies(
              countryData?.currencies ? countryData?.currencies : {}
            )}
          </InfoValue>
        </Info>
        <Info>
          <InfoTitle>Continents</InfoTitle>
          <InfoValue>{countryData?.continents.join(', ')}</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Neighbouring Countries</InfoTitle>
          {countryData?.borders.map(countryCode => (
            <BorderingCountry
              countryCode={countryCode}
              key={`borderingCountry-${countryCode}`}
            />
          ))}
        </Info>
      </InfoContainer>
    </StyledCountryView>
  );
}

export default CountryView;
