import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ListExpense from "./pages/Expense/ListExpense";
import CreateExpense from "./pages/Expense/CreateExpense";
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import ContactUs from "./pages/contact/ContactUs";
import Features from './pages/features/Features';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Statistics from './pages/Statistics';
import Budget from './pages/Budgets/ListBudget';
import CreateBudget from './pages/Budgets/CreateBudget';
import Landing from './pages/Landing';
import About from './pages/About/About';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Expense" element={<ListExpense />}/>
          <Route path="/Expense/Create" element={<CreateExpense />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/Budgets" element={<Budget />} />
          <Route path="/Budgets/Create" element={<CreateBudget />} />
          <Route path="/Features" element={<Features/>}/>
          <Route path="/ContactUs"element={<ContactUs/>}/>
          <Route path="/PrivacyPolicy"element={<PrivacyPolicy/>}/>
          <Route path="/About"element={<About/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
