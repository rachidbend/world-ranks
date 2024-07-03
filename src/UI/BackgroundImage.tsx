import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background: url('/hero-image-wr.jpg');
  background-size: cover;
  background-position: center;
  height: 29.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(Link)`
  position: relative;
  top: -2rem;
`;

const Logo = styled.img``;

/**
 * Displays the background Image and the Logo in the center
 */
function BackgroundImage() {
  return (
    <StyledBackground>
      {/* logo */}
      <LogoLink to="/">
        <Logo src="/Logo.svg" alt="World ranks logo" />
      </LogoLink>
    </StyledBackground>
  );
}

export default BackgroundImage;
