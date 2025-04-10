import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Applications', path: '/application' },
    { name: 'Products', path: '/product' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const getLinkClasses = (path) =>
    location.pathname === path
      ? 'text-blue font-semibold'
      : 'text-gray-600 hover:text-blue-400';

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto md:py-4 py-0 px-4 sm:px-6 lg:px-8 font-mont">
        <div className="flex justify-between h-16 items-center">
          <div>
            <img src={assets.capture} alt="logo" className='md:w-60 md:h-25 w-45 h-20 rounded-4xl' />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:hidden lg:flex space-x-6 py-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={getLinkClasses(item.path)}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block ${getLinkClasses(item.path)}`}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
