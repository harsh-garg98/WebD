import { useState, useEffect } from "react";
import countriesServices from "./services/countries";
import Search from "./components/Search";
import CountryInfo from "./components/CountryInfo";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [showCountry, setShowCountry] = useState(null);

  const totalCountries = countriesInfo.length;

  useEffect(() => {
    countriesServices
      .getAll()
      .then((initialList) => setCountriesInfo(initialList));
  }, []);

  const handleFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredCountriesInfo =
    searchFilter.length === 0
      ? countriesInfo
      : countriesInfo.filter((country) =>
          country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
        );

  console.log(showCountry);
  return (
    <>
      <Search filterFunction={handleFilter} />
      <CountryInfo
        filteredCountryInfo={filteredCountriesInfo}
        totalCountries={totalCountries}
        setShowCountry={setShowCountry}
        showCountry={showCountry}
      />
    </>
  );
}

export default App;
