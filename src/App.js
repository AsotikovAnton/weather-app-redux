import React from 'react';
import ChooseTown from './components/ChooseTown';
import Weather from './components/Weather';

export default function App() {
  return (
    <div className="container mt-3">
      <ChooseTown/>
      <Weather/>
    </div>
  );
}
