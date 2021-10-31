import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const countriesToShow = () => {
    if (!search.replace(/\s/g, '').length) {
      return <p> </p>;
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    if (filteredCountries.length === 1) {
      return (
        <>
          <h1>{filteredCountries[0].name}</h1>
          <p>capital {filteredCountries[0].capital}</p>
          <p>population {filteredCountries[0].population}</p>
          <h2>languages</h2>
          <ul>
            {filteredCountries[0].languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img
            src={filteredCountries[0].flags.svg}
            alt={`${filteredCountries[0].name} flag`}
            width="200"
          />
        </>
      );
    }

    return false;
  };

  return (
    <div>
      find countries{' '}
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {countriesToShow()
        ? countriesToShow()
        : filteredCountries.map((country) => (
            <p key={country.latlng}>{country.name}</p>
          ))}
    </div>
  );
}

export default App;
