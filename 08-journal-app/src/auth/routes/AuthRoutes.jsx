import React from 'react'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'

import { Navigate, Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />}/>
      <Route path='register' element={<RegisterPage />}/>
    
      <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
