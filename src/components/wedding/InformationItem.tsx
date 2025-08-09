import { ReactNode } from 'react';

interface InformationItemProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  iconBgColor?: string;
  iconTextColor?: string;
}

export const InformationItem = ({
  icon,
  label,
  value,
  iconBgColor = 'bg-pink-100',
  iconTextColor = 'text-pink-500',
}: InformationItemProps) => (
  <div className='flex items-start gap-3'>
    <div className={`p-2 rounded-full ${iconBgColor} ${iconTextColor}`}>{icon}</div>
    <div>
      <p className='text-xs font-medium text-gray-500'>{label}</p>
      <p className='text-sm font-medium text-gray-800'>{value}</p>
    </div>
  </div>
);
