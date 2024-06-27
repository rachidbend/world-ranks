import styled from 'styled-components';

const StyledSearchBox = styled.div``;

function SearchBox() {
  return (
    <StyledSearchBox>
      <label htmlFor="searchBox">
        <img src="/public/Search.svg" alt="" />
      </label>
      <input id="searchBox" type="text" />
    </StyledSearchBox>
  );
}

export default SearchBox;
