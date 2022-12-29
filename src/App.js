import Hero from './components/Hero';
import Popular from './components/Popular';
import Veggie from './components/Veggie';
import Nonveg from './components/Nonveg';
import './app.css';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';

function App() {
  return (
    <div className="App">
      <Hero/>
      <div className='container'>
        <h2>Popular Dishes ⭐</h2>
        <Popular/>
        <h2>Carbs for Meat Lovers 🍖</h2>
        <Nonveg/>
        <h2>Popular with vegans 🥦</h2>
        <Veggie/>
        <h2>Delicious Desserts 🍮</h2>
        <Desserts/>
        <h2>Refreshing Drinks 🍹</h2>
        <Drinks/>
      </div>
    </div>
  );
}

export default App;
