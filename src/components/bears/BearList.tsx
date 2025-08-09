import { useState } from 'react';
import { IoPawOutline } from 'react-icons/io5';
import type { BearType } from '@interfaces';
import { useBearStore } from '@stores';
import { WhiteCard } from '@components';

export const BearList = () => {
  const bears = useBearStore(state => state.bears);
  const addBear = useBearStore(state => state.addBear);
  const removeBears = useBearStore(state => state.removeBears);

  const blackBears = useBearStore(s => s.blackBears);
  const polarBears = useBearStore(s => s.polarBears);
  const pandaBears = useBearStore(s => s.pandaBears);

  const [name, setName] = useState('');
  const [type, setType] = useState<BearType>('black');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addBear(name.trim(), type);
      setName('');
      setType('black');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <WhiteCard className='max-w-2xl mx-auto mt-10 animate__animated animate__fadeInUpBig'>
      <h2 className='text-xl text-center font-semibold mb-4'>Bear List</h2>

      {/* Form to add new bear */}
      <form onSubmit={handleSubmit} className='mb-6 flex flex-col md:gap-4'>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <input
              type='text'
              placeholder='Bear name'
              value={name}
              onChange={e => setName(e.target.value)}
              className={`w-full ${error ? 'border-red-500 border' : ''}`}
            />
            {error && (
              <p className='text-sm text-red-500 mt-1'>Please enter a bear name.</p>
            )}
          </div>
          <div className='w-full md:w-1/2 mb-4 md:mb-0'>
            <select
              value={type}
              onChange={e => setType(e.target.value as BearType)}
              className='w-full'
            >
              <option value='black'>Black</option>
              <option value='polar'>Polar</option>
              <option value='panda'>Panda</option>
            </select>
          </div>
        </div>

        {/* Action buttons */}
        <div className='flex flex-col md:flex-row md:gap-4'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='w-full md:w-1/2 mb-4 md:mb-0 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition ease-in-out duration-200'
          >
            Add bear
          </button>
          <button
            type='button'
            onClick={removeBears}
            className='w-full md:w-1/2 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition ease-in-out duration-200'
          >
            Remove all bears
          </button>
        </div>
      </form>

      {/* Bear count */}
      <p className='text-center mt-6 text-gray-600'>
        Bears: 🐻 Black: {blackBears}, 🐻‍❄️ Polar: {polarBears}, 🐼 Panda: {pandaBears}
      </p>

      {/* No bears message */}
      {bears.length === 0 && blackBears === 0 && polarBears === 0 && pandaBears === 0 ? (
        <p className='text-gray-500 italic text-center mt-4'>No bears yet.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
          {bears.map(bear => (
            <div
              key={bear.id}
              className='flex items-start gap-3 border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 bg-white text-gray-800'
            >
              <div>
                <p className='flex items-center gap-1'>
                  <IoPawOutline size={20} />
                  {bear.id}
                </p>
                <h3 className='text-lg font-semibold mb-1'>Name: {bear.name}</h3>
                <p className='text-sm text-gray-600 font-medium capitalize'>
                  Type: <span>{bear.type}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </WhiteCard>
  );
};
