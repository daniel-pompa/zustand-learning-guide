import type { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface Props {
  href: string;
  Icon: IconType;
  title: string;
  subTitle: string;
  onClick?: () => void;
}

export const SideMenuItem = ({ href, Icon, title, subTitle, onClick }: Props) => {
  return (
    <NavLink
      to={href}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-4 py-2 px-4 rounded transition-colors ${
          isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-700 text-gray-300'
        }`
      }
    >
      <Icon size={24} />
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5'>{title}</span>
        <span className='text-sm text-white/50 hidden md:block'>{subTitle}</span>
      </div>
    </NavLink>
  );
};
