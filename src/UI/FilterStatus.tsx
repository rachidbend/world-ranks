import styled from 'styled-components';
import { FilterTitle } from './Filters';
import { useState } from 'react';
import { useFilters } from '../context/FiltersContext';

const StyledFilterStatus = styled.div``;
const Container = styled.div``;
const CheckboxContainer = styled.div``;
const CustomCheckboxContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
const Checkbox = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;
const CustomCheckbox = styled.label<{ $isChecked: boolean }>`
  height: 2.4rem;
  width: 2.4rem;
  display: inline-block;
  border: ${props =>
    props.$isChecked
      ? '0.2rem solid var(--color-blue-100)'
      : '0.2rem solid var(--color-grey-300)'};
  border-radius: 0.6rem;

  background-color: ${props =>
    props.$isChecked ? 'var(--color-blue-100)' : 'var(--color-grey-100)'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;
const CheckboxTitle = styled.label`
  font-size: 1.4rem;
  font-family: var(--font-main);
  color: var(--color-grey-400);
  font-weight: 500;
  cursor: pointer;
`;
const CheckMark = styled.img``;

/**
 * Filter the countries based on if a country is independent or if it a member of UN:
 * - Member of United Nations
 * - Independent
 * @returns the filter by status component
 */
function FilterStatus() {
  const { isUnMember, handleIsUnMember } = useFilters();
  function handleChange(bool: boolean) {
    handleIsUnMember(bool);
  }

  return (
    <StyledFilterStatus>
      <FilterTitle>Status</FilterTitle>
      <Container>
        <CheckboxContainer>
          <Checkbox
            checked={isUnMember}
            onChange={() => handleChange(true)}
            type="checkbox"
            id="filter-is-un-member"
          />
          <CustomCheckboxContainer>
            <CustomCheckbox
              $isChecked={isUnMember}
              htmlFor="filter-is-un-member"
            >
              {isUnMember && <CheckMark src="/Done_round.svg" />}
            </CustomCheckbox>
            <CheckboxTitle htmlFor="filter-is-un-member">
              Member of the United Nations
            </CheckboxTitle>
          </CustomCheckboxContainer>
        </CheckboxContainer>

        <CheckboxContainer>
          <Checkbox
            checked={!isUnMember}
            onChange={() => handleChange(false)}
            type="checkbox"
            id="filter-independent"
          />
          <CustomCheckboxContainer>
            <CustomCheckbox
              $isChecked={!isUnMember}
              htmlFor="filter-independent"
            >
              {!isUnMember && <CheckMark src="/Done_round.svg" />}
            </CustomCheckbox>
            <CheckboxTitle htmlFor="filter-independent">
              Independent
            </CheckboxTitle>
          </CustomCheckboxContainer>
        </CheckboxContainer>
      </Container>
    </StyledFilterStatus>
  );
}

export default FilterStatus;
