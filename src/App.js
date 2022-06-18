import LoginPage from './pages/Login';
import { Link, Outlet,useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import useToken from './useToken';
import { Layout, Menu, Breadcrumb,Button } from 'antd';
import 'antd/dist/antd.css';
import Expense from "./pages/Expense";
const { Header, Content, Footer } = Layout;
function App() {
  let navigate = useNavigate();
  const { token, setToken } = useToken();
  const items = [
    { lable: "Home", key: "home" },
    { lable: "Expenses", key: "expenses" }
  ]
  if(!token) {
    return <LoginPage setToken={setToken} />
  }
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['expense']}>

          <Menu.Item key="home"> <Link to={"/Home"}>Home</Link></Menu.Item>
          <Menu.Item key="expense"> <Link to={"/Expense"}>Expenses</Link></Menu.Item>
           {token && (<Menu.Item key="logoout" onClick={logOut}>LogOut</Menu.Item>)}</Menu>

      </Header>
      {/* LÄGG IN FUNKTION FÖR INLOGGAD/EJ INLOGGAD ---- VISA OLIKA KOMPONENTER  */}
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>

  )
}
export default App;
