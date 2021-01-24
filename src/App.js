import Dashboard from "./Pages/Dashboard";
import CoinDetail from "./Pages/CoinDetail";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";

import "./App.css";
import { WatchListContextProvider } from "./Context/watchListContext";

const App = () => {
  return (
    <div className="app">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path='/coins/:id' component={CoinDetail} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
