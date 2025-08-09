import {
  IoCalendarOutline,
  IoPeopleOutline,
  IoCheckmarkCircleOutline,
  IoTimeOutline,
} from 'react-icons/io5';

interface Props {
  guestCount: number;
  date: string;
  time: string;
  isConfirmed: boolean;
  firstName?: string;
}

interface WeddingDetailItem {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

export const WeddingDetailsCard = ({
  guestCount,
  date,
  time,
  isConfirmed,
  firstName = '',
}: Props) => {
  if (!isConfirmed) {
    return (
      <div className='text-center'>
        <div className='space-y-1 text-sm'>
          <p className='text-gray-600'>We'll miss you at the celebration.</p>
          <p className='text-gray-500'>
            {firstName && `${firstName}, thank you for letting us know.`}
          </p>
        </div>
      </div>
    );
  }

  const totalGuests = guestCount + 1;

  const details: WeddingDetailItem[] = [
    {
      icon: <IoPeopleOutline size={22} className='text-indigo-600' />,
      label: 'Guests',
      value: `${totalGuests} ${totalGuests === 1 ? 'guest' : 'guests'}`,
    },
    {
      icon: <IoCalendarOutline size={20} className='text-blue-600' />,
      label: 'Date',
      value: date,
    },
    {
      icon: <IoTimeOutline size={22} className='text-blue-600' />,
      label: 'Time',
      value: time,
    },
    {
      icon: <IoCheckmarkCircleOutline size={22} className='text-green-600' />,
      label: 'RSVP status',
      value: <span className='text-green-600'>Confirmed</span>,
    },
  ];

  return (
    <div className='w-full space-y-3 text-sm'>
      {details.map((detail, idx) => (
        <div key={idx} className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {detail.icon}
            <span className='text-sm font-medium text-gray-600'>{detail.label}</span>
          </div>
          <div className='text-sm'>{detail.value}</div>
        </div>
      ))}
    </div>
  );
};
