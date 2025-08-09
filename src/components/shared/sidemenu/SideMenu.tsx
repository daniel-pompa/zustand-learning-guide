import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline,
} from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { SideMenuItem } from '@components';
import { useAuthStore } from '@stores';
import Swal from 'sweetalert2';
import { useState } from 'react';

const menuItems = [
  {
    title: 'Dashboard',
    subTitle: 'App overview',
    href: '/dashboard',
    Icon: IoSpeedometerOutline,
  },
  {
    title: 'Bears',
    subTitle: 'Track bears',
    href: '/dashboard/bears',
    Icon: IoPawOutline,
  },
  {
    title: 'Person',
    subTitle: 'Personal information',
    href: '/dashboard/person',
    Icon: IoAccessibilityOutline,
  },
  {
    title: 'Tasks',
    subTitle: 'Task management',
    href: '/dashboard/tasks',
    Icon: IoListOutline,
  },
  {
    title: 'Wedding',
    subTitle: 'Guest management',
    href: '/dashboard/wedding-invitation',
    Icon: IoHeartOutline,
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu = ({ isOpen, onClose }: Props) => {
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Handle logout with confirmation modal
  const handleLogoutClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default NavLink navigation

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your session.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      logout();
      onClose();
      navigate('/auth/login');

      // Show toast notification
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        id='menu'
        className={`
          bg-gray-900 text-gray-300 w-full md:w-80 z-50
          fixed top-0 left-0 h-screen
          overflow-y-auto transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Branding */}
        <div className='my-4 px-6'>
          <h1 className='text-lg md:text-2xl font-bold text-white'>
            Zustand
            <span className='text-indigo-500 text-sm'> State Manager</span>
          </h1>
          <p className='text-white/50 text-sm'>Simple but powerful state manager.</p>
        </div>

        {/* User Profile */}
        <div className='px-6 py-6 border-b border-gray-800'>
          <p className='text-sm text-white/50 tracking-wider'>Welcome back</p>
          <div className='flex items-center gap-4 mt-4'>
            <div className='relative'>
              <img
                className='rounded-full w-14 h-14 object-cover'
                src='/user.png'
                alt='User profile'
              />
              <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full border-2 border-gray-900'></div>
            </div>
            <div>
              <h3 className='font-bold text-white'>John Doe</h3>
              <p className='text-xs text-gray-400'>Administrator</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav id='nav' className='w-full px-6 space-y-2 mt-4'>
          {menuItems.map(item => (
            <SideMenuItem key={item.href} {...item} onClick={onClose} />
          ))}

          {/* Logout NavLink with confirmation */}
          <NavLink
            to='/auth/login'
            className='mt-10 flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded'
            onClick={handleLogoutClick}
          >
            <IoLogOutOutline size={24} />
            <div className='flex flex-col'>
              <span className='text-lg font-bold leading-5 text-gray-300'>Log out</span>
              <span className='text-sm text-white/50 hidden md:block'>End session</span>
            </div>
          </NavLink>
        </nav>
      </aside>

      {/* Simple toast notification */}
      {showToast && (
        <div className='fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded shadow-lg'>
          Logged out successfully
        </div>
      )}
    </>
  );
};
