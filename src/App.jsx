import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import HomeMenu from './views/HomeMenu'
import CaculateNumber from './views/CaculateNumber'
import CaculateMoneyShaer from './views/CaculateMoneyShaer'

function App() {
  return (
    <>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/calnum" element={<CaculateNumber />} />
        <Route path="/calmoneyshaer" element={<CaculateMoneyShaer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App