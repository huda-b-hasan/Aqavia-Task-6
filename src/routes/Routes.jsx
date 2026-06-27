import { Routes, Route } from 'react-router-dom';

import LogIn from '../Pages/LogIn';
import Home from '../Pages/Home';
import Users from '../Pages/Users';
import Driver from '../Pages/Driver';
import Ads from '../Pages/Ads';
import Restaurants from '../Pages/Restaurants';
import PromoCodes from '../Pages/PromoCodes';
import Layout from '../Ui/Layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} /> 
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/drivers" element={<Driver />} />
      <Route path="/ads" element={<Ads />} />
      <Route path="/promocodes" element={<PromoCodes />} />
      </Route>
    </Routes>
  );
}