import { useEffect, useState } from 'react';
import useGetAllCountries from '../hooks/useGetAllCountries';
import { Countries } from '../helpers/helperTypes';
import { createContext, useContext } from 'react';
import { useFilters } from './FiltersContext';

interface CountriesProps {
  children: React.ReactElement;
}

interface CountriesContextType {
  isLoading: boolean;
  isError: boolean;
  filteredResults: Countries;
  numOfResults: number;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

function search(searchQuery: string, allCountries: Countries): Countries {
  if (allCountries) {
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

    return newResults;
  } else return allCountries;
}

function sortCountries(sortOrder: string, countries: Countries): Countries {
  let sortedCountries: Countries = [];
  if (sortOrder === 'POPULATION') {
    sortedCountries = countries.sort((a, b) => {
      return b.population - a.population;
    });
  } else if (sortOrder === 'NAME') {
    sortedCountries = countries.sort((a, b) => {
      const textA = a.name.common.toLowerCase();
      const textB = b.name.common.toLowerCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  } else if (sortOrder === 'AREA') {
    sortedCountries = countries.sort((a, b) => {
      return b.area - a.area;
    });
  }
  return sortedCountries;
}

function filterByRegion(
  regions: string[],
  allCountires: Countries | undefined
): Countries {
  if (allCountires) {
    const results = allCountires.filter(country =>
      regions.includes(country.region.toLowerCase())
    );
    return results;
  } else return [];
}

function filterByUnMemberShip(
  isUnMember: boolean,
  allCountries: Countries
): Countries {
  const result = allCountries.filter(
    country => country.unMember === isUnMember
  );
  return result;
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

  const { searchQuery, sortByFilter, filterRegions, isUnMember } = useFilters();

  useEffect(
    function () {
      let filteredCountries: Countries = [];
      if (filterRegions.length > 0) {
        // get the countries filtered by region
        filteredCountries = filterByRegion(filterRegions, allCountries);
      }
      if (filterRegions.length === 0) {
        filteredCountries = allCountries ? allCountries : [];
      }
      const filterByUnStatus = filterByUnMemberShip(
        isUnMember,
        filteredCountries
      );
      // sort the filtered countries
      const sortedCountries = sortCountries(sortByFilter, filterByUnStatus);

      // apply any search query that the user types
      if (searchQuery) {
        const searchResults = search(searchQuery, sortedCountries);
        setFilteredResults(searchResults);
      } else {
        setFilteredResults(sortedCountries);
      }
    },

    [searchQuery, sortByFilter, filterRegions, isUnMember, allCountries]
  );

  return (
    <CountriesContext.Provider
      value={{
        isError,
        isLoading,
        filteredResults,
        numOfResults: filteredResults.length,
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
