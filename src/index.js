import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import 'antd/dist/antd.css';
import Expense from "./pages/Expense";
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import ContactUs from "./pages/contact/ContactUs";
import Features from './pages/features/Features';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Statistics from './pages/Statistics';
import Budget from './pages/Budget';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Expense" element={<Expense />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Features" element={<Features/>}/>
          <Route path="/ContactUs"element={<ContactUs/>}/>
          <Route path="/PrivacyPolicy"element={<PrivacyPolicy/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
