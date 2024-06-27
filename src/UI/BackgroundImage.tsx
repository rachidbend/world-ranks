import styled from 'styled-components';

const StyledBackground = styled.div`
  background: url('/public/hero-image-wr.jpg');
  background-size: cover;
  background-position: center;
  height: 23.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img``;

/**
 * Displays the background Image and the Logo in the center
 */
function BackgroundImage() {
  return (
    <StyledBackground>
      {/* logo */}
      <Logo src="/public/Logo.svg" alt="" />
    </StyledBackground>
  );
}

export default BackgroundImage;
