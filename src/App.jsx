import React, { useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';

import fetchData from './services/api';

import Card from './components/Card';

export default function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(search).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none border-2 border-transparent focus:border-2 focus:border-violet-700"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="submit"
          className="p-3 ml-2 rounded-lg bg-violet-700 text-gray-50 transition-all hover:bg-violet-600"
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}
