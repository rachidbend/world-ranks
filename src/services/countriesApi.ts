import { Countries } from '../helpers/helperTypes';

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

export { getAllCountries };
