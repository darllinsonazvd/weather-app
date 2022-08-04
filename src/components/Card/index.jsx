import React from 'react';

export default function Card() {
  return (
    <div className="p-6 mt-10 rounded-lg shadow-xl bg-white">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-800">
          Campina Grande
        </span>
        <span className="text-sm font-medium text-slate-400">
          Paraíba, Brasil
        </span>
      </div>

      <div className="flex justify-center mt-4 mb-2 font-bold text-slate-800">
        <span className="text-7xl">22</span>
        <span className="mt-2 text-2xl">ºC</span>
      </div>

      <div className="text-center">
        <span className="block">icon</span>
        <span className="text-slate-800 font-medium">Nublado</span>
      </div>
    </div>
  );
}
