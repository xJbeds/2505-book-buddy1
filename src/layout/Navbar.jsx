import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Book Buddy</p>
      <nav>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/Account">Account</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
