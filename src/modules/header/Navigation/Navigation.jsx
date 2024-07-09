import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav>
      <NavLink>Home</NavLink>
      <NavLink>Nannies</NavLink>
      {/* {isLogeIn && <NavLink to="/favorites">Favorites</NavLink>} */}
    </nav>
  );
};
