import './App.css';
import { useEffect, useState } from 'react';
import { Header, Search, Weather } from './components';

export default function App() {
  const [location, setLocation] = useState('São Paulo');

  const handleChange = (entry: any) => {
    setLocation(entry);
  }

  useEffect(() => {}, [location]);

  return (
    <div>
      <Header title="Previsão do Tempo" />
      <Search onSearchChange={handleChange} />
      <Weather location={location} />
    </div>
  );
}

