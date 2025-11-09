import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import AddQuestion from './pages/AddQuestion';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4000 },
        }}
      />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add_question' element={<AddQuestion />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
