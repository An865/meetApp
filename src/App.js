import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventsNumber from './EventsNumber';

function App() {
  return (
    <div className="App">
      <EventsNumber />
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
