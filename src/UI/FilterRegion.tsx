import styled from 'styled-components';
import { FilterTitle } from './Filters';
import { useFilters } from '../context/FiltersContext';

const StyledFilterRegion = styled.div``;
const RegionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const RegionItem = styled.li`
  list-style: none;
`;
const RegionInput = styled.input`
  width: 0rem;
  height: 0rem;
  visibility: hidden;
`;
const RegionLabel = styled.label<{ $isChecked: boolean }>`
  font-size: 1.4rem;
  color: ${props =>
    props.$isChecked ? 'var(--color-grey-400)' : 'var(--color-grey-300)'};
  font-family: var(--font-main);
  text-transform: capitalize;
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  background-color: ${props =>
    props.$isChecked ? 'var(--color-grey-200)' : 'var(--color-grey-100)'};
  display: inline-block;
  cursor: pointer;

  transition: background 0.3s ease-out, color 0.3s ease-out;

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

/**
 * Filter component for filtering the countries returned based on the region they belong to:
 * - Americas
 * - Antarctic
 * - Africa
 * - Asia
 * - Europe
 * - Oceania
 * @returns the filter by region component
 */
function FilterRegion() {
  const { filterRegions, handleRegion } = useFilters();

  function handleChange(region: string): void {
    handleRegion(region);
  }

  return (
    <StyledFilterRegion>
      <FilterTitle>Region</FilterTitle>
      <RegionList>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('americas')}
            type="radio"
            name=""
            id="filter-region-americas"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('americas')}
            htmlFor="filter-region-americas"
          >
            americas
          </RegionLabel>
        </RegionItem>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('antarctic')}
            type="radio"
            name=""
            id="filter-region-antarctic"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('antarctic')}
            htmlFor="filter-region-antarctic"
          >
            antarctic
          </RegionLabel>
        </RegionItem>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('africa')}
            type="radio"
            name=""
            id="filter-region-africa"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('africa')}
            htmlFor="filter-region-africa"
          >
            africa
          </RegionLabel>
        </RegionItem>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('asia')}
            type="radio"
            name=""
            id="filter-region-asia"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('asia')}
            htmlFor="filter-region-asia"
          >
            asia
          </RegionLabel>
        </RegionItem>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('europe')}
            type="radio"
            name=""
            id="filter-region-europe"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('europe')}
            htmlFor="filter-region-europe"
          >
            europe
          </RegionLabel>
        </RegionItem>
        <RegionItem>
          <RegionInput
            onClick={() => handleChange('oceania')}
            type="radio"
            name=""
            id="filter-region-oceania"
          />
          <RegionLabel
            $isChecked={filterRegions.includes('oceania')}
            htmlFor="filter-region-oceania"
          >
            oceania
          </RegionLabel>
        </RegionItem>
      </RegionList>
    </StyledFilterRegion>
  );
}

export default FilterRegion;
