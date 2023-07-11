import './App.css';
import '../node_modules/reset-css/reset.css';
import Home from './components/Home/Home';
import Service from './components/Services/Services';
import Subscription from './components/Subscription/Subscription';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Home/>
      <Service/>
      <Subscription />
      <Portfolio />
    </div>
  );
}

export default App;
