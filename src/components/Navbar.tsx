import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import MovingText from '@/components/Movingtext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'bg-white py-4 sticky top-0 z-50 transition-transform duration-300',
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="\WhatsApp_Image_2025-05-22_at_8.08.55_PM-removebg-preview.png"
              alt="Trendvise Pro Logo"
              className="h-14 w-14 object-contain"
            />
            <span className="text-2xl mt-1 font-bold text-dealwise-green">Trendvisepro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLinks isMobile={false} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-transparent animate-fade-in">
            <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
              <NavLinks isMobile={true} />
            </div>
          </div>
        )}
      </nav>

      {/* MovingText below navbar */}
      <MovingText />
    </>
  );
};

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        isMobile
          ? 'flex flex-col space-y-6 text-black'
          : 'flex space-x-6 items-center'
      )}
    >
      <Link
        to="/Trendwise"
        className="hover:text-dealwise-green mt-2 transition-colors"
      >
        About Trendvise Pro
      </Link>

      {isMobile ? (
        <>
          <Link
            to="/Subscription"
            className="hover:text-dealwise-green mt-2 transition-colors"
          >
            Silver Package
          </Link>
          <Link
            to="/Subscriptionplatinum"
            className="hover:text-dealwise-green mt-2 transition-colors"
          >
            Platinum Package
          </Link>
        </>
      ) : (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center mt-2 gap-1 hover:text-dealwise-green transition-colors focus:outline-none"
          >
            Subscriptions <ChevronDown size={16} />
          </button>

          <div
            className={cn(
              'absolute bg-white text-black p-4 rounded shadow-md mt-2 z-50 transform transition-all duration-300 ease-in-out origin-top',
              isDropdownOpen
                ? 'opacity-100 scale-100 visible'
                : 'opacity-0 scale-95 invisible',
              'w-56'
            )}
          >
            <Link
              to="/Subscription"
              onClick={() => setDropdownOpen(false)}
              className="block rounded-lg px-4 py-2 hover:bg-gray-300 transition-colors"
            >
              Index Option Silver Package
            </Link>
            <Link
              to="/Subscriptionplatinum"
              onClick={() => setDropdownOpen(false)}
              className="block px-4 rounded-lg py-2 hover:bg-gray-300 transition-colors"
            >
              Index Option Platinum Package
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/Letstalk"
        className="hover:text-dealwise-green mt-2 transition-colors"
      >
        Let's Talk
      </Link>

      <a
        href="https://wa.me/918850279928"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-dealwise-green transition-colors text-blue-500 border-2 p-2 px-2 rounded-lg"
      >
        WhatsApp Us
      </a>
    </div>
  );
};

export default Navbar;
