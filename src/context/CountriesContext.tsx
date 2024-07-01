import { useEffect, useState } from 'react';
import useGetAllCountries from '../hooks/useGetAllCountries';
import { Countries } from '../helpers/helperTypes';
import { createContext, useContext } from 'react';
import { useFilters } from './FiltersContext';

interface CountriesProps {
  children: React.ReactElement;
}

interface CountriesContextType {
  allCountries: Countries | undefined;
  isLoading: boolean;
  isError: boolean;
  filteredResults: Countries;
  numOfResults: number;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

function search(
  searchQuery: string,
  allCountries: Countries
): Countries | undefined {
  const newResults = allCountries?.filter(
    country =>
      country?.name?.common
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      country?.name?.official
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      country?.region?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country?.subregion?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (newResults) return newResults;
}

/**
 * Context to make getting countries data easier
 * @param children takes in any JSX
 * @returns a provider and the children that will be provided the context
 */
function CountriesProvider({ children }: CountriesProps) {
  const { allCountries, isError, isLoading } = useGetAllCountries();

  const initialState: Countries = [];
  const [filteredResults, setFilteredResults] = useState(initialState);

  const numOfResults = allCountries ? allCountries.length : 0;

  const { searchQuery, sortByFilter, filterRegions, isUnMember } = useFilters();

  useEffect(
    function () {
      if (searchQuery) {
        if (allCountries) {
          const results = search(searchQuery, allCountries);
          results ? setFilteredResults(results) : setFilteredResults([]);
        }
      } else {
        if (allCountries) setFilteredResults(allCountries);
      }
    },

    [searchQuery, allCountries]
  );

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        isError,
        isLoading,
        filteredResults,
        numOfResults,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
export function useCountries() {
  const value = useContext(CountriesContext);

  if (value === undefined)
    throw new Error('useCountries was used outside CountriesContect!');

  return value;
}

export default CountriesProvider;
