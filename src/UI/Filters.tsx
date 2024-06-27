import styled from 'styled-components';
import FilterSortBy from './FilterSortBy';

const StyledFilters = styled.div``;
export const FilterTitle = styled.p`
  font-family: var(--font-main);
  font-size: 1.2rem;
  color: var(--color-grey-300);
  font-weight: 600;
  margin-bottom: 1rem;
`;

function Filters() {
  return (
    <StyledFilters>
      {/* Sort by */}
      <FilterSortBy />
      {/* Region */}

      <p>Region</p>
      {/* Status */}
      <p>Status</p>
    </StyledFilters>
  );
}

export default Filters;

// able to search for country by name, region, or subregion
// able to filter the results based on selected region
// be able to to filter by status (if a country is a member of UN)
// be able to sort by population, name in an alphabetical order, or area

// get all countries, search, filter, and sort from the list of countries
