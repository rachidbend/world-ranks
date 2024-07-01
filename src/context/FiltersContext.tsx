import { createContext, useContext, useState } from 'react';
enum SoryByOptions {
  Population = 'POPULATION',
  Name = 'NAME',
  Area = 'AREA',
}

interface FilterContextType {
  searchQuery: string;
  sortByFilter: string;
  filterRegions: string[];
  isUnMember: boolean;

  handleSortBy(option: string): void;
  handleRegion(region: string): void;
  handleIsUnMember(bool: boolean): void;
  handleSearch(query: string): void;
}

const FiltersContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProps {
  children: React.ReactElement;
}

/**
 * Context provider for the filters main filters which are:
 * - sortBy filter
 * - region filter
 * - isUnMember filter
 * @param children any children that would make use of this context
 * @returns the context provider and any children that would use this context
 */
function FiltersProvider({ children }: FilterProps) {
  const initialState: {
    searchQuery: string;
    sortByFilter: string;
    filterRegions: string[];
    isUnMember: boolean;
  } = {
    searchQuery: '',
    sortByFilter: SoryByOptions.Population,
    filterRegions: [],
    isUnMember: true,
  };

  const [filters, setFilters] = useState(initialState);

  function handleSortBy(option: string): void {
    switch (option) {
      case 'POPULATION':
        setFilters({ ...filters, sortByFilter: SoryByOptions.Population });
        break;
      case 'NAME':
        setFilters({ ...filters, sortByFilter: SoryByOptions.Name });
        break;
      case 'AREA':
        setFilters({ ...filters, sortByFilter: SoryByOptions.Area });
        break;

      default:
        setFilters({
          ...filters,
          sortByFilter: SoryByOptions.Population,
        });
        break;
    }
  }

  function handleRegion(region: string): void {
    let newFilterRegions = [];
    if (filters.filterRegions.includes(region)) {
      newFilterRegions = filters.filterRegions.filter(
        filterRegion => filterRegion !== region
      );

      setFilters({ ...filters, filterRegions: newFilterRegions });
    }
    if (!filters.filterRegions.includes(region)) {
      setFilters({
        ...filters,
        filterRegions: [...filters.filterRegions, region],
      });
    } else {
      throw new Error('something went wrong with region filter');
    }
  }

  function handleIsUnMember(bool: boolean) {
    setFilters({ ...filters, isUnMember: bool });
  }

  function handleSearch(query: string) {
    setFilters({ ...filters, searchQuery: query });
  }

  return (
    <FiltersContext.Provider
      value={{
        searchQuery: filters.searchQuery,
        sortByFilter: filters.sortByFilter,
        filterRegions: filters.filterRegions,
        isUnMember: filters.isUnMember,
        handleSortBy,
        handleRegion,
        handleIsUnMember,
        handleSearch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

/**
 * Custom hook for getting the context values easily
 * @returns the context values
 */
export function useFilters() {
  const value = useContext(FiltersContext);
  if (value === undefined)
    throw new Error('useFilters is used outside of FiltersContext!');

  return value;
}

export default FiltersProvider;
