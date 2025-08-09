import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { SideMenu } from '@components';

export const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className='bg-gray-50 min-h-screen text-gray-900 flex'>
      {/* Sidebar */}
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
      {/* Main content */}
      <div className='flex-1 p-4 md:ml-80'>
        <Outlet />
      </div>
      {/* Toggle menu button (mobile only) */}
      <button
        onClick={toggleMenu}
        className={`md:hidden fixed top-3 right-3 z-50 p-2 ${
          isMenuOpen
            ? 'bg-transparent border-none shadow-none'
            : 'bg-gray-50 text-gray-900 rounded-full shadow border'
        }`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <FiX className='text-white/50' size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  );
};
