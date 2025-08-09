import { FormEvent } from 'react';

interface Props {
  firstName: string;
  lastName: string;
  guestCount: number;
  getFormattedDate: string;
  getFormattedTime: string;
  isConfirmed: boolean;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setGuestCount: (value: number) => void;
  setSelectedDate: (value: string) => void;
  setSelectedTime: (value: string) => void;
  setIsConfirmed: (value: boolean) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const WeddingForm = ({
  firstName,
  lastName,
  guestCount,
  getFormattedDate,
  getFormattedTime,
  isConfirmed,
  setFirstName,
  setLastName,
  setGuestCount,
  setSelectedDate,
  setSelectedTime,
  setIsConfirmed,
  onSubmit,
}: Props) => {
  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      {/* Guest information */}
      <fieldset>
        <legend className='text-lg font-semibold border-b pb-2 w-full'>
          Guest information
        </legend>
        <div className='grid grid-cols-1 gap-6 mt-4'>
          <div className='space-y-1'>
            <label htmlFor='firstName' className='font-medium'>
              First name
            </label>
            <input
              type='text'
              id='firstName'
              placeholder='First name'
              className='w-full'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='lastName' className='font-medium'>
              Last name
            </label>
            <input
              type='text'
              id='lastName'
              placeholder='Last name'
              className='w-full'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className='space-y-1 mt-4'>
          <label htmlFor='guestNumber' className='font-medium'>
            How many guests will you bring to the wedding?
          </label>
          <input
            type='number'
            id='guestNumber'
            placeholder='5'
            min='0'
            className='w-full'
            value={guestCount}
            onChange={e => setGuestCount(Number(e.target.value))}
          />
        </div>
      </fieldset>

      {/* Event details */}
      <fieldset>
        <legend className='text-lg font-semibold border-b pb-2 w-full'>
          Event details
        </legend>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
          <div className='space-y-1'>
            <label htmlFor='eventDate' className='font-medium'>
              Event date
            </label>
            <input
              type='date'
              id='eventDate'
              className='w-full'
              value={getFormattedDate}
              onChange={e => setSelectedDate(e.target.value)}
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='eventTime' className='font-medium'>
              Event time
            </label>
            <input
              type='time'
              id='eventTime'
              className='w-full'
              value={getFormattedTime}
              onChange={e => setSelectedTime(e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      {/* Attendance confirmation */}
      <fieldset className='space-y-4'>
        <legend className='text-lg font-semibold border-b pb-2 w-full'>
          Attendance confirmation
        </legend>
        <div className='flex flex-col space-y-2 mt-4'>
          <div className='flex items-center space-x-4'>
            <input
              type='radio'
              id='radioYes'
              name='isComing'
              value='yes'
              className='h-4 w-4 text-pink-600 focus:ring-pink-500'
              checked={isConfirmed}
              onChange={() => setIsConfirmed(true)}
            />
            <label htmlFor='radioYes' className='text-sm font-medium text-gray-700'>
              Yes, I'll be there!
            </label>
          </div>
          <div className='flex items-center space-x-4'>
            <input
              type='radio'
              id='radioNo'
              name='isComing'
              value='no'
              className='h-4 w-4 text-pink-600 focus:ring-pink-500'
              checked={!isConfirmed}
              onChange={() => setIsConfirmed(false)}
            />
            <label htmlFor='radioNo' className='text-sm font-medium text-gray-700'>
              Regretfully decline
            </label>
          </div>
        </div>
      </fieldset>

      <button
        type='submit'
        className='w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-md transition-colors mt-6'
      >
        Confirm attendance
      </button>
    </form>
  );
};
