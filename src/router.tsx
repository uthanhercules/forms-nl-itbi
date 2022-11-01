import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/home';

const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;
