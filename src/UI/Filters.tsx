import styled from 'styled-components';
import FilterSortBy from './FilterSortBy';
import FilterRegion from './FilterRegion';
import FilterStatus from './FilterStatus';

const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
export const FilterTitle = styled.p`
  font-family: var(--font-main);
  font-size: 1.2rem;
  color: var(--color-grey-300);
  font-weight: 600;
  margin-bottom: 1rem;
`;

/**
 * Component that contains all filters other than search filter.
 * The filters it contains are:
 * - Sort by [population, name (alphabetical), area]
 * - Region [americas, antarctic, africa, asia, europe, oceania]
 * - Status [member of the UN, independent]
 * @returns the components that contain each filter separately
 */
function Filters() {
  return (
    <StyledFilters>
      {/* Sort by */}
      <FilterSortBy />
      {/* Region */}
      <FilterRegion />
      {/* Status */}
      <FilterStatus />
    </StyledFilters>
  );
}

export default Filters;

// able to search for country by name, region, or subregion
// able to filter the results based on selected region
// be able to to filter by status (if a country is a member of UN)
// be able to sort by population, name in an alphabetical order, or area

// get all countries, search, filter, and sort from the list of countries
