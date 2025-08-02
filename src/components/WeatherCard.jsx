export default function WeatherCard({ weather }) {
   if (
    !weather ||
    !weather.weather ||
    weather.weather.length === 0 ||
    !weather.main
  ) {
    return <p className="text-red-500">No weather data available.</p>;
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-gray-700">
        {weather.weather[0].main} - {weather.weather[0].description}
      </p>
      <p className="text-xl mt-2">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
