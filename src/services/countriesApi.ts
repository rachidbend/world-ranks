import { Countries, Country } from '../helpers/helperTypes';

/**
 * Fetcher function that gets all the countries
 * @returns An array of country info objects
 */
async function getAllCountries() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);

    if (!res.ok)
      throw new Error('something went wrong getting all the contries!');
    const data: Countries = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetcher function to get the data of a country based on it's name
 * @param name the official name of the country
 * @returns the parsed data of the country requested
 */
async function getCountryData(name: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok)
    throw new Error('something went wrong getting the specified country!');
  const data: Country = await res.json();

  return data;
}

export { getAllCountries, getCountryData };
