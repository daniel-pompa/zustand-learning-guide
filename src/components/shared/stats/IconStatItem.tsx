import React from 'react';

interface IconStatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string; // Tailwind classes for value badge, e.g. 'bg-blue-100 text-blue-700'
}

// Reusable component to display an icon, a label, and a value
export const IconStatItem = ({ icon, label, value, color }: IconStatItemProps) => {
  return (
    <div className='flex items-center justify-between'>
      {/* Left side: icon and label */}
      <div className='flex items-center space-x-2'>
        <div className='flex justify-center items-center text-lg'>{icon}</div>
        <span className='text-sm font-medium text-gray-600'>{label}</span>
      </div>

      {/* Right side: value badge */}
      <span
        className={`text-xs font-semibold rounded-full ${color} inline-flex items-center justify-center w-6 h-6`}
      >
        {value}
      </span>
    </div>
  );
};
