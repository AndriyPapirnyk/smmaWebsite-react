import './App.css';
import '../node_modules/reset-css/reset.css';
import Home from './components/Home/Home';
import Service from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Home/>
      <Service/>
    </div>
  );
}

export default App;
