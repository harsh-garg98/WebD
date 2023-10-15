import CountryDetails from "./CountryDetails";

const CountryInfo = ({
  filteredCountryInfo,
  totalCountries,
  setShowCountry,
  showCountry,
}) => {
  if (filteredCountryInfo.length === totalCountries) {
    return <p>Search a country</p>;
  } else {
    if (filteredCountryInfo.length > 10) {
      return <p>Too many matches</p>;
    } else {
      if (filteredCountryInfo.length > 1) {
        return (
          <div>
            <ul>
              {filteredCountryInfo.map((country) => (
                <li key={country.name.common}>
                  {country.name.common}
                  <button onClick={() => setShowCountry(country)}>show</button>
                </li>
              ))}
            </ul>
            <CountryDetails filteredCountryInfo={showCountry} />
          </div>
        );
      } else {
        if (filteredCountryInfo.length === 1) {
          return (
            <CountryDetails filteredCountryInfo={filteredCountryInfo[0]} />
          );
        } else {
          return <p>No matches</p>;
        }
      }
    }
  }
};

export default CountryInfo;
