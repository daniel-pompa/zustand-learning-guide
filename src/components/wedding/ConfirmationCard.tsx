import {
  IoHeartOutline,
  IoPersonOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import { ConfirmationStatus, InformationItem, WhiteCard } from '@components';

interface ConfirmationPreviewCardProps {
  firstName: string;
  lastName: string;
  guestCount: number;
  formattedDate: string;
  formattedTime: string;
  isConfirmed: boolean;
}

export const ConfirmationCard = ({
  firstName,
  lastName,
  guestCount,
  formattedDate,
  formattedTime,
  isConfirmed,
}: ConfirmationPreviewCardProps) => (
  <WhiteCard
    className={`border ${
      isConfirmed ? 'border-pink-300' : 'border-gray-200'
    } shadow-none p-6 rounded-xl`}
  >
    {isConfirmed ? (
      <>
        {/* Header */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='p-2 rounded-full bg-pink-100 text-pink-600'>
            <IoHeartOutline size={20} />
          </div>
          <h2 className='text-lg'>Attendance confirmed</h2>
        </div>

        {/* Desktop layout for confirmed attendance */}
        <div className='hidden sm:grid grid-cols-3 gap-6'>
          <InformationItem
            icon={<IoPersonOutline size={18} />}
            label='Name'
            value={`${firstName} ${lastName}`}
          />
          <InformationItem
            icon={<IoPeopleOutline size={18} />}
            label='Total Guests'
            value={guestCount + 1}
          />
          <div></div> {/* Empty column for alignment */}
          <InformationItem
            icon={<IoCalendarOutline size={18} />}
            label='Date'
            value={formattedDate}
          />
          <InformationItem
            icon={<IoTimeOutline size={18} />}
            label='Time'
            value={formattedTime}
          />
          <ConfirmationStatus isConfirmed={isConfirmed} />
        </div>

        {/* Mobile layout for confirmed attendance */}
        <div className='sm:hidden space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <InformationItem
              icon={<IoPersonOutline size={18} />}
              label='Name'
              value={`${firstName} ${lastName}`}
            />
            <InformationItem
              icon={<IoPeopleOutline size={18} />}
              label='Guests'
              value={guestCount + 1}
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <InformationItem
              icon={<IoCalendarOutline size={18} />}
              label='Date'
              value={formattedDate}
            />
            <InformationItem
              icon={<IoTimeOutline size={18} />}
              label='Time'
              value={formattedTime}
            />
          </div>
          <ConfirmationStatus isConfirmed={isConfirmed} />
        </div>
      </>
    ) : (
      // Declined attendance view
      <div className='text-center py-8'>
        <h3 className='text-lg font-medium mb-2'>Not Attending</h3>
        <div className='space-y-1 text-base'>
          <p className='text-gray-600'>We'll miss you at the celebration.</p>
          <p className='text-gray-500'>
            {`${firstName}, thank you for letting us know you can't attend.`}
          </p>
        </div>
      </div>
    )}
  </WhiteCard>
);
