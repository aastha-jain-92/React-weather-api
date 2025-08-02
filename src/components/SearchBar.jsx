import { useState } from 'react';

export default function SearchBar({ setCity, onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
    onSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="p-2 rounded border w-60"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </form>
  );
}
