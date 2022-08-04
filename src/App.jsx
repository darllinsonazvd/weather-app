import React from 'react';

import { MagnifyingGlass } from 'phosphor-react';

export default function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="p-3 ml-2 rounded-lg bg-violet-700 text-gray-50"
        >
          <MagnifyingGlass size={20} />
        </button>
      </form>
    </div>
  );
}
