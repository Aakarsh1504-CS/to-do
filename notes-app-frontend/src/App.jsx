// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Note from './components/Note';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/note/:postname" element={<PrivateRoute><Note /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;