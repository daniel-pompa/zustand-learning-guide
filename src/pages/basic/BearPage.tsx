import { BearCounterCard, BearList } from '@components';

export const BearPage = () => {
  return (
    <>
      <h1>Bear Counter</h1>
      <p className='mt-2 text-gray-600'>Zustand state management for bear counters</p>
      <hr className='my-4 border-gray-300' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
        <BearCounterCard label='Black Bears' type='black' />
        <BearCounterCard label='Polar Bears' type='polar' />
        <BearCounterCard label='Panda Bears' type='panda' />
      </div>
      <BearList />
    </>
  );
};
