import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryView = styled.div``;

function CountryView() {
  const { name } = useParams();

  return (
    <StyledCountryView>
      <p>{name} </p>
    </StyledCountryView>
  );
}

export default CountryView;
