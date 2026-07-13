import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold tracking-widest text-amber-400">
            LUXE Dining
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-400">
            Experience luxury dining with premium ingredients,
            world-class chefs, and an unforgettable atmosphere.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-neutral-400 transition hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-neutral-400">
            <p>123 Luxury Avenue</p>
            <p>New York, NY 10001</p>
            <p>+1 (555) 123-4567</p>
            <p>info@luxedining.com</p>
          </div>

          <div className="mt-6 flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-neutral-500 transition hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} LUXE Dining. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
