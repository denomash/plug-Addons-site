import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
import NotFound from '../Components/NotFound'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
