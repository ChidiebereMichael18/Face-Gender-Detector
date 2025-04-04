import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-lexend">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-primary">Royco Delivery Express</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 py-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Tracking</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Applications</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
