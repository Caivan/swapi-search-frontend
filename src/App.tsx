import { SetStateAction, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import SWCharactersList from './components/SWPeopleList/SWCharactersList';
import { useCharactersList } from './hooks/useCharactersList';

function App() {
  const [search, setSearch] = useState('');
  const {people , isLoading, error } = useCharactersList({search});

  const handleChange = (event: { target: { value: SetStateAction<string>} }) => {
    setSearch(event.target.value);
  };

  return (
    <div className='App'>
      <h1>Start Wars Characters</h1>
      <section className='searchBox'>
        <input type='text' value={search} onChange={handleChange} ></input>
      </section>
      { error && <p>We couldn't perform the search</p> }
      {isLoading ?
        <div>Loading..</div> :
        <SWCharactersList people={people} />
      }
    </div>
  )
}

export default App
