import { NavLink } from "react-router-dom";

export function NavBar() {
  const nav = [
    {
      href: "/",
      name: "Home",
      icon: "-",
    },
    {
      href: "/specs",
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

  const styleNav =
    "font-sans rounded-lg p-2 px-4 flex m-4 mx-0 text-[#eee] text-sm  justify-center items-center hover:opacity-80 ease-in-out";

  return (
    <div className="w-40 min-h-screen bg-[#121231] rounded-[20px] p-4">
      <div className="text-center text-[#F4C927] h-24 flex justify-center items-center text-2xl">
        S P E C S
      </div>
      {nav.map((n, i) => (
        <NavLink
          className={({ isActive }) => (isActive ? `${styleNav} bg-[#F4C927]` : `${styleNav} bg-[#21213E]`)}
          key={i}
          to={n.href}
        >
          <p className="ml-[-20px]">{n.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
