import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login';
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import useToken from './useToken';
import {Avatar, Layout, Menu, Breadcrumb, Button } from 'antd';
import 'antd/dist/antd.css';
import Expense from "./pages/Expense";
import { locale } from 'moment';
import { UserOutlined } from '@ant-design/icons';
import FooterComponent from './components/Shared/Footer/FooterComponent';
import { Modal } from './components/Modal/Modal';
const { Header, Content,Footer } = Layout;



function App() {
  let navigate = useNavigate();
  const { token, setToken } = useToken();
  const items = [
    { lable: "Home", key: "home" },
    { lable: "Expenses", key: "expenses" },
    {lable: "Statistics", key: "statistics"}
  ]
  if (!token) {
    return <LoginPage setToken={setToken} />
  }
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item><Avatar size="large" icon={<UserOutlined/>} /></Menu.Item>
          <Menu.Item key="home"> <Link to={"/"}>Home</Link></Menu.Item>
          <Menu.Item key="expense"> <Link to={"/Expense"}>Expenses</Link></Menu.Item>
          <Menu.Item key="statistics"><Link to={"/Statistics"}>Statistics</Link></Menu.Item>
          {token && (<Menu.Item key="logoout" onClick={logOut}>LogOut</Menu.Item>)}
        </Menu>

      </Header>
      {/* LÄGG IN FUNKTION FÖR INLOGGAD/EJ INLOGGAD ---- VISA OLIKA KOMPONENTER  */}
      <Content>
      <Outlet />
      </Content>
      <Footer>
      <FooterComponent/>
      </Footer>
      
    </Layout>

  )
}
export default App;