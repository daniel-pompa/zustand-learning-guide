import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

interface ConfirmationStatusProps {
  isConfirmed: boolean;
}

export const ConfirmationStatus = ({ isConfirmed }: ConfirmationStatusProps) => {
  const Icon = isConfirmed ? IoCheckmarkCircleOutline : IoCloseCircleOutline;
  const bgColor = isConfirmed ? 'bg-green-100' : 'bg-red-100';
  const textColor = isConfirmed ? 'text-green-500' : 'text-red-500';
  const statusText = isConfirmed ? 'Confirmed' : 'Declined';
  const valueColor = isConfirmed ? 'text-green-600' : 'text-red-600';

  return (
    <div className='flex items-start gap-3'>
      <div className={`p-2 rounded-full ${bgColor} ${textColor}`}>
        <Icon size={18} />
      </div>
      <div>
        <p className='text-xs font-medium text-gray-500'>Status</p>
        <p className={`text-sm font-medium ${valueColor}`}>{statusText}</p>
      </div>
    </div>
  );
};
