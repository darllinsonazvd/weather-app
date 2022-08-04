import React from 'react';

export default function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form>
        <input type="text" placeholder="Cidade" />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}
