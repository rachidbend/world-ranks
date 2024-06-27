import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../services/countriesApi';

function useGetAllCountries() {
  const {
    data: allCountries,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['all-countries'],
    queryFn: getAllCountries,
  });

  return { allCountries, isLoading, isError };
}

export default useGetAllCountries;
