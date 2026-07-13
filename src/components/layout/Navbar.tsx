import { NavLink } from "react-router-dom";

import Button from "@/components/ui/Button";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Reservations", path: "/reservations" },
  { label: "Chefs", path: "/chefs" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-widest text-amber-400"
        >
          LUXE Dining
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "transition-colors duration-200",
                  isActive
                    ? "text-amber-400"
                    : "text-neutral-300 hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink to="/login">
            <Button variant="outline">
              Login
            </Button>
          </NavLink>

          <NavLink to="/cart">
            <Button>
              Cart
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
