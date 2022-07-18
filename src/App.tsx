import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import Weather from './components/Weather';

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
