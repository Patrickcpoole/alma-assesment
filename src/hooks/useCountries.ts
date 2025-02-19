import { countries } from "countries-list";

interface CountryOption {
  value: string;
  label: string;
}

export function useCountries() {
  const countryOptions: CountryOption[] = Object.entries(countries)
    .map(([code, country]) => ({
      value: code,
      label: country.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return { countryOptions };
}
