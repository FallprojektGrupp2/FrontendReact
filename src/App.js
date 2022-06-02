import LogIn from "./pages/Login"
import { Link, Outlet } from "react-router-dom";
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Expense from "./pages/Expense";
const { Header, Content, Footer } = Layout;


function App() {
  const headerMenu = ["Bu", "Bä", "Lä"]

  const items = [
    { lable: "Home", key: "home" },
    { lable: "Expenses", key: "expenses" }

  ]

  return (

    <Layout>

      <Header>
        <div className="logo" />
        <Menu

          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['expense']}
        >
          <Menu.Item key="home"> <Link to={"/Home"}>Home</Link></Menu.Item>
          <Menu.Item key="expense"> <Link to={"/Expense"}>Expenses</Link></Menu.Item>

        </Menu>
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
