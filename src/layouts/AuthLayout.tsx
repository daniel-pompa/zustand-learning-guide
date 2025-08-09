import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='flex h-screen w-full'>
      {/* Branding */}
      <div className='hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-700 to-purple-600 items-center justify-center'>
        <h1 className='text-7xl text-white font-extrabold tracking-tight'>Zustand</h1>
      </div>
      {/* Form */}
      <div className='flex w-full lg:w-1/2 items-center justify-center px-6 sm:px-12 md:px-24'>
        <div className='w-full max-w-md border bg-white p-8 rounded-xl shadow-xl'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
