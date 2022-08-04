import React, { useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';

import Card from './components/Card';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-2 outline-transparent focus:outline-2 focus:outline-violet-700"
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

      <Card />
    </div>
  );
}
