import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

// components
import Header from './components/Header';
import Answer from './components/Answer';
import Stats from './components/Stats';
import Tips from './components/Tips';

// styles
import './App.css';


function App() {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [summerWeather, setSummerWeather] = useState(false);

  // Use custom hook to fetch data. 
  // If data is still loading display isPending, if there is an error display error.
  const { data, isPending, error } = useFetch("https://backend-react-bongoblida.herokuapp.com/");

  if (data) {
    if (data.main.temp >= 10 && data.weather[0].main !== "Rain" && data.clouds.all <= 50 && data.wind.speed < 8) {
      setSummerWeather(true);
    }
  }

  return (
    <div className="App">
      <Header language={languageToggle} />
      {/* User can switch between Icelandic and English */}
      <div className="app__language">
        <button className="button__language" onClick={() => setLanguageToggle(!languageToggle)}>{languageToggle ? 'Icelandic' : 'English'}</button>
      </div>
      {data && <Answer summerWeather={summerWeather} language={languageToggle} />}
      {isPending && <p>Loading...</p>}
      {data && <Stats 
                  temp={data.main.temp}
                  clouds={data.clouds.all}
                  wind={data.wind.speed}
                  type={data.weather[0].main}
                  language={languageToggle}
                />}
      {/* Tips for what to do when it is bad weather are only displayed when there is no summer weather */}
      {data && !summerWeather && <Tips language={languageToggle} />}
      {error && <p>error</p>}
    </div>
  );
}

export default App;
