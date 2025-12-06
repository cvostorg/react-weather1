import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' Component={Home} ></Route>
        <Route path='/month-statistics' Component={MonthStatistics} ></Route>
      </Routes>
      <Popup />
    </div>
  );
}

export default App;
