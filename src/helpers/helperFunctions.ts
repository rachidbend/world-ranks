/**
 * Makes a string of the languages that a country residence speeks
 * @param languages object that contains the languages a country's residence speeks
 * @returns a string the languages a country's residence speeks
 */
export function getLanguages(languages: { [key: string]: string }): string {
  const entries = Object.entries(languages);
  const allCountries = entries.map(langauge => langauge[1]);
  const stringOfValues = allCountries.join(', ');

  return stringOfValues;
}

/**
 * Makes a string of the currencies a country uses
 * @param languages object that contains the currencies a country uses
 * @returns a string the currencies a country uses
 */
export function getCurrencies(currencies: {
  [key: string]: {
    name: string;
    symbol: string;
  };
}): string {
  const entries = Object.entries(currencies);
  const allCountries = entries.map(currency => currency[1].name);
  const stringOfValues = allCountries.join(', ');
  return stringOfValues;
}
