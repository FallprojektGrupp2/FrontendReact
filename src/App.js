import LogIn from "./pages/Login"
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
    <header></header>
    <nav>
        <LogIn/>
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/Expense">Expenses</Link>
    </nav>
    <footer></footer>
    </div>

  )}
export default App;
