import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    {
      name: 'HOME',
      path: '/',
    },
    {
      name: 'WORKS',
      path: '/works',
    },
    {
      name: 'ABOUT',
      path: '/about',
    },
    {
      name: 'CONTACT',
      path: '/contact',
    },
  ];

  return (
    <nav
      className="
        fixed
        top-10
        right-16
        z-50
        flex
        gap-12
        text-xl
        tracking-wide
      "
    >
      {links.map((link) => {
        // HIDE CURRENT PAGE LINK
        if (location.pathname === link.path) {
          return null;
        }

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className="
              text-white/80
              hover:text-white
              transition
              duration-300
              relative
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-white
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
