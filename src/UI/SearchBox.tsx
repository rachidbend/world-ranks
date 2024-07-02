import styled from 'styled-components';
import { useFilters } from '../context/FiltersContext';

const StyledSearchBox = styled.div``;

function SearchBox() {
  const { searchQuery, handleSearch } = useFilters();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    handleSearch(query);
  }

  return (
    <StyledSearchBox>
      <label htmlFor="searchBox">
        <img src="/public/Search.svg" alt="" />
      </label>
      <input
        id="searchBox"
        type="text"
        onChange={handleChange}
        value={searchQuery}
        placeholder="Search by Name, Region, Subregion"
      />
    </StyledSearchBox>
  );
}

export default SearchBox;
