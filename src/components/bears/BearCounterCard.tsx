import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import type { BearType } from '@interfaces';
import { useBearStore } from '@stores';
import { WhiteCard } from '@components';

interface BearCounterCardProps {
  type: BearType;
  label: string;
}

export const BearCounterCard = ({ type, label }: BearCounterCardProps) => {
  const count = useBearStore(state => state[`${type}Bears`]);
  const changeBearCount = useBearStore(state => state.changeBearCount);
  const resetBearCount = useBearStore(state => state.resetBearCount);

  return (
    <WhiteCard centered className='animate__animated animate__fadeIn'>
      <h2 className='text-xl font-semibold mb-4'>{label}</h2>
      {/* Counter buttons and value */}
      <div className='flex items-center justify-center gap-4'>
        <button
          onClick={() => changeBearCount(type, 'decrement')}
          disabled={count === 0}
          className={`rounded-full p-2 transition ${
            count === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          aria-label='Decrease count'
        >
          <IoRemoveOutline size={20} />
        </button>
        <span className='text-xl font-bold text-gray-600 w-10 text-center'>{count}</span>
        <button
          onClick={() => changeBearCount(type, 'increment')}
          className='rounded-full p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition'
          aria-label='Increase count'
        >
          <IoAddOutline size={20} />
        </button>
      </div>
      {/* Reset button */}
      <button
        onClick={() => resetBearCount(type)}
        className='mt-5 p-1 text-lg w-full md:w-1/2 tracking-wide'
      >
        Reset
      </button>
    </WhiteCard>
  );
};
