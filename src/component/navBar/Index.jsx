import { NavLink } from "react-router-dom";
import "./nav.css";
export default function Index() {
  const nav = [
    {
      href: "/",
      name: "Specs",
      icon: "-",
    },
    {
      href: "/About",
      name: "About",
      icon: "-",
    },
    {
      href: "/Blog",
      name: "Blog",
      icon: "-",
    },
  ];
  return (
    <div className="nav-bar">
      <div className="logo">S P E C S</div>
      {nav.map((n, i) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "nav pending" : isActive ? "nav active" : "nav"
          }
          key={i}
          to={n.href}
        >
          <p>{n.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
