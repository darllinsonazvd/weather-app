import propTypes from 'prop-types';
import React from 'react';

export default function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="p-6 mt-10 rounded-lg shadow-xl bg-white">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-800">
          {location.name}
        </span>
        <span className="text-sm font-medium text-slate-400">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="flex justify-center mt-4 mb-2 font-bold text-slate-800">
        <span className="text-7xl">{current.temp_c}</span>
        <span className="mt-2 text-2xl">ºC</span>
      </div>

      <div className="text-center">
        <img src={current.condition.icon} alt="Weather icon" />
        <span className="text-slate-800 font-medium">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
