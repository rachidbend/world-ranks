import { useQuery } from '@tanstack/react-query';
import { getCountryData } from '../services/countriesApi';

function useGetCountryData(name: string) {
  const {
    data: countryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['country', name],
    queryFn: () => getCountryData(name),
    enabled: name ? true : false,
  });

  return { countryData, isLoading, isError };
}

export default useGetCountryData;
