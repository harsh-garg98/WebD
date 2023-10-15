const CountryDetails = ({ filteredCountryInfo }) => {
  if (filteredCountryInfo !== null) {
    return (
      <div>
        <h2>{filteredCountryInfo.name.common}</h2>
        <p>Capital {filteredCountryInfo.capital}</p>
        <p>Area {filteredCountryInfo.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(filteredCountryInfo.languages).map(
            (element, index) => (
              <li key={index}>{element}</li>
            )
          )}
        </ul>
        <img
          src={filteredCountryInfo.flags.png}
          alt={`Flag of ${filteredCountryInfo.name.common}`}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default CountryDetails;
