import React from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import NumberedList from './pages/Numbered-List';
import HomePage from './pages/homepage';
import ChangeTextColor from './pages/changetextcolor';
import ProductsList from './pages/product-list';
import DarkMode from './pages/darkmode';

function App() {
  return (
    <div className="App">

      <header>
        <ul>
          <li>
            <NavLink to='/'>HomePage</NavLink>
          </li>
          <li>
            <NavLink to='/changetextcolor'>ChangeTextColor</NavLink>
          </li>
          <li>
            <NavLink to='/numberedlist'>NumberedList</NavLink>
          </li>
         <li>
            <NavLink to='/productlist'>Productlist</NavLink>
          </li>
          <li>
            <NavLink to='/darkmode'>DarkMode</NavLink>
          </li>
          </ul>
      </header>

      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<ChangeTextColor/>} path='/changetextcolor'/>
        <Route element={<NumberedList/>} path='/numberedlist'/>
        <Route element={<ProductsList/>} path='/productlist'/>
        <Route element={<DarkMode/>} path='/darkmode'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>

    </div>
  );
  }

export default App;