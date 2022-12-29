import Hero from './components/Hero';
import Popular from './components/Popular';
import './app.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      <div className='container'>
        <h1>Popular Dishes</h1>
        <Popular/>
      </div>
    </div>
  );
}

export default App;
