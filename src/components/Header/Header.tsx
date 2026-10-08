import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import "./Header.css";

function Header() {
  let app = "Learn React";
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  if (!isAuthenticated) {
    return <p>Broken HEADER</p>;
  }

  return (
    <div className="header">
      <h3>{app}</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/reducer">Reducer</NavLink>
      <NavLink to="/reducer-second">Reducer_v2</NavLink>
      <NavLink to="/redux">Redux</NavLink>
      <NavLink to="/redux-tasks">Tasks</NavLink>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Header;
