import Dashboard from './Pages/Dashboard'
import CoinDetail from './Pages/CoinDetail'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Components/Header';

import './App.css'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Route exact path='/' component={Dashboard} />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
