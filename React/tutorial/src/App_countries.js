import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

// const api_key = `${process.env.REACT_APP_API_KEY}`;
// console.log(api_key)

const FilterLengthZero = ({ setEmptyDetailedCountry }) => {
  useEffect(() => setEmptyDetailedCountry(), [])
  return <div>Type to search</div>
}

const FilterLengthNine = ({ setEmptyDetailedCountry }) => {
  useEffect(() => setEmptyDetailedCountry(), [])
  return <div>Too many matches. Type more!</div>
}

const FilterLengthGreaterThanOne = ({ filteredCountries, buttonHandler }) => {
  return (
    <div>
      {
        filteredCountries.map(country => (
          <CountryButton key={country.name.common} country={country} onClick={() => buttonHandler(country)} />
        ))
      }
    </div>
  )
}

const FilterLengthEqualToOne = ({ filteredCountries, setActualDetailedCountry }) => {
  useEffect(() => setActualDetailedCountry(filteredCountries[0]), [])
}

const Display = ({ country }) => {
  const [weatherDetails, setWeatherDetails] = useState([]);

  const lat = country.latlng[0];
  const long = country.latlng[1];
  const api_key = '0e7642df09df5b464709c34883802da0';
  console.log(api_key)

  console.log(lat, long, country.name.common)

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`
      )
      .then(response => {
        setWeatherDetails(response.data);
      });
  }, []);

  console.log(weatherDetails)

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>Capital {country.capital}</div>
      <div>Area {country.area}</div>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <h2>Weather in {country.name.common}</h2>
      <div>Temperature {weatherDetails.main.temp} °C</div>
      {/* <img src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} /> */}
      <div>Wind {weatherDetails.wind.speed} m/s</div>
    </div>
  );
};

const CountryButton = ({ country, onClick }) => {
  return (
    <div>
      {country.name.common}
      <button onClick={() => onClick(country)}>show</button>
    </div>
  );
};

const CheckConditions = ({ setEmptyDetailedCountry, filteredCountries, filter, buttonHandler, setActualDetailedCountry }) => {
  if (filter === '') {
    return <FilterLengthZero setEmptyDetailedCountry={setEmptyDetailedCountry} />
  }
  else if (filteredCountries.length > 9) {
    return <FilterLengthNine setEmptyDetailedCountry={setEmptyDetailedCountry} />
  }
  else if (filteredCountries.length > 1) {
    return <FilterLengthGreaterThanOne filteredCountries={filteredCountries} buttonHandler={buttonHandler} />
  }
  else if (filteredCountries.length === 1) {
    return <FilterLengthEqualToOne filteredCountries={filteredCountries} setActualDetailedCountry={setActualDetailedCountry} />
  }
  else {
    return <></>
  }
}

const CheckDetailedDisplayConditions = ({ detailedCountry }) => {
  if (!detailedCountry) {
    return <></>
  }
  else {
    return <Display country={detailedCountry} />
  }
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [detailedCountry, setDetailedCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const buttonHandler = country => {
    setDetailedCountry(country);
  };

  const filterHandler = event => {
    setFilter(event.target.value);
  };

  const filterCountries = country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  };

  const countriesSubset = countries.filter(filterCountries);

  function setEmptyDetailedCountry() {
    setDetailedCountry('')
  }

  function setActualDetailedCountry(country) {
    setDetailedCountry(country)
  }

  return (
    <div>
      find country: <input onChange={filterHandler} />
      <CheckConditions
        setEmptyDetailedCountry={setEmptyDetailedCountry}
        filteredCountries={countriesSubset}
        filter={filter}
        buttonHandler={buttonHandler}
        setActualDetailedCountry={setActualDetailedCountry} />
      <CheckDetailedDisplayConditions detailedCountry={detailedCountry} />
    </div>
  );
};

export default App;
