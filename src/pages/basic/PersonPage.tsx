import { IoPersonOutline } from 'react-icons/io5';
import { usePersonStore } from '@stores';
import { WhiteCard } from '@components';

export const PersonPage = () => {
  const { firstName, lastName, email, setField } = usePersonStore();
  const personState = { firstName, lastName, email };

  const fields = [
    {
      id: 'firstName',
      label: 'First name',
      placeholder: 'Enter your first name',
      type: 'text',
    },
    {
      id: 'lastName',
      label: 'Last name',
      placeholder: 'Enter your last name',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'email',
    },
  ] as const;

  return (
    <>
      {/* Header */}
      <h1>Person</h1>
      <p className='mt-2 text-gray-600 mb-4'>
        Information to be shared with other stores, Session Storage, and Firebase
      </p>
      <hr className='my-4 border-gray-300' />

      <div className='animate__animated animate__fadeIn'>
        {/* Card Header */}
        <div className='flex items-center justify-between max-w-2xl mx-auto p-6 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-t-xl mt-8'>
          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20'>
              <IoPersonOutline size={26} className='text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>Personal information</h1>
              <p className='text-sm text-white/90'>Manage your stored personal data</p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <WhiteCard className='max-w-2xl mx-auto p-4 md:p-8 rounded-t-none shadow-lg border-t-0'>
          <form className='space-y-6'>
            {fields.map(({ id, label, placeholder, type }) => (
              <div key={id} className='space-y-2'>
                <label htmlFor={id} className='flex items-center gap-3 font-medium'>
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  value={personState[id]}
                  onChange={e => setField(id, e.target.value)}
                />
              </div>
            ))}

            {/* Current State Display */}
            <div className='mt-8'>
              <div className='flex items-center justify-between mb-4 pb-2 border-b border-gray-200'>
                <h2 className='text-base font-semibold text-gray-800'>Current state</h2>
                <span className='text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-800 font-medium'>
                  Live preview
                </span>
              </div>
              <div className='relative'>
                <pre className='bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-800 max-h-60 overflow-auto shadow-inner border border-gray-200'>
                  {JSON.stringify(personState, null, 2)}
                </pre>
                <div className='absolute top-2 right-2 flex space-x-1'>
                  <div className='w-3 h-3 rounded-full bg-red-400'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                  <div className='w-3 h-3 rounded-full bg-green-400'></div>
                </div>
              </div>
            </div>
          </form>
        </WhiteCard>
      </div>
    </>
  );
};
