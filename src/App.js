import EventList from './components/EventList.js';
import CitySearch from './components/CitySearch.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
