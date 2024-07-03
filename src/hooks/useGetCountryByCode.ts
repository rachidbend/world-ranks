import { useQuery } from '@tanstack/react-query';
import { getCountryByCode } from '../services/countriesApi';

function useGetCountryByCode(code: string) {
  const {
    data: borderingCountry,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['bordering-country', code],
    queryFn: () => getCountryByCode(code),
    enabled: code ? true : false,
  });

  return { borderingCountry, isLoading, isError };
}

export default useGetCountryByCode;
