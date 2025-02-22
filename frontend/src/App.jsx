import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideDrawer from './layout/SideDrawer'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SubmitCommission from './pages/submitCommission';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/slices/userSlice';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    // dispatch(getAllAuctionItems());
    // dispatch(fetchLeaderboard());
  }, []);
  return (
    <Router>
    <SideDrawer />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/submit-commission" element={<SubmitCommission/>} />
      <Route path="/how-it-works-info" element={<HowItWorks/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <ToastContainer position="top-right" />
    </Router>
  )
}

export default App
