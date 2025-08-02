import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(API_KEY)

export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  // Get weather by coordinates (geolocation)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude,longitude);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    });
  }, []);

  const fetchWeatherByCity = async (cityName) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    console.log(res);
    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();
    setWeather(data);
  } catch (error) {
    alert(error.message);
    setWeather(null);
  }
};


  return (
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-6">🌤️ Weather App</h1>
      <SearchBar setCity={setCity} onSearch={fetchWeatherByCity} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
