import styled from 'styled-components';
import { FilterTitle } from './Filters';
import { useState } from 'react';

const StyledFilterSortBy = styled.div`
  position: relative;
`;

const CustomSelect = styled.div`
  /* position: relative; */
`;

const SelectButton = styled.button`
  width: 100%;
  background-color: var(--color-grey-100);
  border: 0.2rem solid var(--color-grey-200);
  border-radius: 1rem;
  color: var(--color-grey-400);
  font-weight: 500;
  font-family: var(--font-main);
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  text-align: left;
  cursor: pointer;
`;
const DropDown = styled.ul`
  position: absolute;
  top: 6rem;
  width: 100%;
  background-color: var(--color-grey-100);
  border: 0.2rem solid var(--color-grey-200);
  border-radius: 0.6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const DropDownItem = styled.li`
  list-style: none;
`;
const DropDownInput = styled.input`
  visibility: hidden;
  width: 0rem;
  height: 0rem;
`;
const DropDownLabel = styled.label`
  color: var(--color-grey-400);
  font-family: var(--font-main);
  font-size: 1.4rem;
  text-transform: capitalize;
  width: 100%;
  display: inline-block;
  padding: 0.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-300);
  }
`;

enum SoryByOptions {
  Population = 'POPULATION',
  Name = 'NAME',
  Area = 'AREA',
}

function FilterSortBy() {
  const [sortByFilter, setSortByFilter] = useState(SoryByOptions.Population);
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  function handleClick(option: string): void {
    switch (option) {
      case 'POPULATION':
        setSortByFilter(SoryByOptions.Population);
        break;
      case 'NAME':
        setSortByFilter(SoryByOptions.Name);
        break;
      case 'AREA':
        setSortByFilter(SoryByOptions.Area);
        break;

      default:
        setSortByFilter(SoryByOptions.Population);
        break;
    }
    setDropDownIsOpen(false);
  }

  return (
    <StyledFilterSortBy>
      <FilterTitle>Sort by</FilterTitle>
      <CustomSelect>
        <SelectButton
          onClick={() => setDropDownIsOpen(!dropDownIsOpen)}
          role="combobox"
          aria-labelledby="select button"
          aria-haspopup="listbox"
          aria-expanded={`${dropDownIsOpen}`}
          aria-controls="select-dropdown"
        >{`${sortByFilter[0]}${sortByFilter
          .slice(1)
          .toLocaleLowerCase()}`}</SelectButton>
      </CustomSelect>
      {dropDownIsOpen && (
        <DropDown role="listbox">
          <DropDownItem role="option">
            <DropDownInput
              type="checkbox"
              checked={sortByFilter === SoryByOptions.Population}
              onChange={() => handleClick(SoryByOptions.Population)}
              id="sort-by-population"
            />
            <DropDownLabel htmlFor="sort-by-population">
              Population
            </DropDownLabel>
          </DropDownItem>
          <DropDownItem>
            <DropDownInput
              checked={sortByFilter === SoryByOptions.Name}
              type="checkbox"
              onChange={() => handleClick(SoryByOptions.Name)}
              id="sort-by-name"
            />
            <DropDownLabel htmlFor="sort-by-name">name</DropDownLabel>
          </DropDownItem>
          <DropDownItem>
            <DropDownInput
              checked={sortByFilter === SoryByOptions.Area}
              type="checkbox"
              onChange={() => handleClick(SoryByOptions.Area)}
              id="sort-by-area"
            />
            <DropDownLabel htmlFor="sort-by-area">area</DropDownLabel>
          </DropDownItem>
        </DropDown>
      )}
    </StyledFilterSortBy>
  );
}

export default FilterSortBy;
