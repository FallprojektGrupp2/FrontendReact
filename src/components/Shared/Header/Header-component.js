import { UserOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../../../pages/Login";
import useToken from "../../../useToken";
import './header-component.css';

export const HeaderComponent = () => {
    let navigate = useNavigate();
  const { token, setToken } = useToken();
  const items = [
    { lable: "Home", key: "home" },
    { lable: "Expenses", key: "expenses" },
    {lable: "Statistics", key: "statistics"}
  ]


  const path =  window.location.pathname;
  if (!token && path !== '/landing' && path !== '/ContactUs' && path !== '/Features'&& path !== '/About') {
    return <LoginPage setToken={setToken} />
  }
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/landing");
    window.location.reload();
  };

    return <div>
        <div className="header-component-top">
            <h3>Johanna</h3>
            <h6>Personal Accounting System</h6>
            <div className="header-component-buttons">
                {!token && <button onClick={() => navigate('/home')}>Sign in | Sign up</button>}
            </div>
        </div>
         <Header>
        

         {token ? (<Menu
      mode="horizontal"
      className="header-component-nav"
    >
      <Menu.Item key="home"> <Link to={"/home"}>Home</Link></Menu.Item>
      <Menu.Item key="expense"> <Link to={"/Expense"}>Expenses</Link></Menu.Item>
      <Menu.Item key="budgets"><Link to={"/Budget"}>Budgets</Link></Menu.Item>
      <Menu.Item key="statistics"><Link to={"/Statistics"}>Statistics</Link></Menu.Item>
       <Menu.Item key="logoout" onClick={logOut}>LogOut</Menu.Item>
    </Menu>) :  (<Menu
      mode="horizontal"
      className="header-component-nav"
    >
      <Menu.Item key="About"> <Link to={"/About"}>About</Link></Menu.Item>
      <Menu.Item key="ContactUs"> <Link to={"/ContactUs"}>Contact</Link></Menu.Item>
      <Menu.Item key="Features"><Link to={"/Features"}>Functions</Link></Menu.Item>
    </Menu>)}

  </Header></div>
}