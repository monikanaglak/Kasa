import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="header_top">
      <Image></Image>
      <nav>
        <Accueil></Accueil>
        <Apropos></Apropos>
      </nav>
    </div>
  );
}
const Image = () => (
  <img src="/images/logo.png" alt="logo" className="logo"></img>
);
const Accueil = () => (
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Accueil
  </NavLink>
);
const Apropos = () => (
  <NavLink
    to="/apropos"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    A propos
  </NavLink>
);
