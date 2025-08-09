import { FormEvent, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { useWeddingData } from '@hooks';
import { ConfirmationCard, WeddingForm, WhiteCard } from '@components';

export const WeddingInvitationPage = () => {
  const {
    firstName,
    lastName,
    setFirstName,
    setLastName,
    guestCount,
    setGuestCount,
    getFormattedDate,
    getFormattedTime,
    setSelectedDate,
    setSelectedTime,
    isConfirmed,
    setIsConfirmed,
  } = useWeddingData();

  const [showPreview, setShowPreview] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowPreview(true);
  };

  return (
    <>
      <h1>Wedding</h1>
      <p className='mt-2 text-gray-600'>Zustand state segmented into slices</p>
      <hr className='my-4 border-gray-300' />

      <div className='animate__animated animate__fadeIn'>
        <div className='flex items-center justify-between max-w-2xl mx-auto p-6 bg-gradient-to-r from-pink-600 to-pink-500 rounded-t-xl mt-8'>
          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20'>
              <IoHeartOutline size={26} className='text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>Wedding invitation</h1>
              <p className='text-sm text-white/90'>Confirm your attendance and details</p>
            </div>
          </div>
        </div>

        <WhiteCard className='max-w-2xl mx-auto p-4 md:p-8 rounded-t-none shadow-lg border-t-0'>
          <WeddingForm
            firstName={firstName}
            lastName={lastName}
            guestCount={guestCount}
            getFormattedDate={getFormattedDate}
            getFormattedTime={getFormattedTime}
            isConfirmed={isConfirmed}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setGuestCount={setGuestCount}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            setIsConfirmed={setIsConfirmed}
            onSubmit={onSubmit}
          />

          {showPreview && (
            <div className='my-8'>
              <ConfirmationCard
                firstName={firstName}
                lastName={lastName}
                guestCount={guestCount}
                formattedDate={getFormattedDate}
                formattedTime={getFormattedTime}
                isConfirmed={isConfirmed}
              />
            </div>
          )}
        </WhiteCard>
      </div>
    </>
  );
};
