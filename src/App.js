import CoinDetail from './Pages/CoinDetail'
import Dashboard from './Pages/Dashboard'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Components/Header';

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
