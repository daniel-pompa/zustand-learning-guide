import { useAuthStore } from '@stores';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white px-6 py-16 text-gray-900'>
      <div className='text-center max-w-2xl'>
        <h1 className='text-9xl font-extrabold tracking-tight text-indigo-600 mb-8 select-none animate-bounce'>
          404
        </h1>
        <h2 className='text-3xl font-semibold mb-4'>Page Not Found</h2>
        <p className='text-gray-600 mb-6 leading-relaxed'>
          Sorry, we couldn't find the page you're looking for. It might have been moved or
          deleted.
        </p>
        <button
          onClick={handleClick}
          className='inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition'
          aria-label='Go back'
        >
          Go back to {isAuthenticated ? 'Dashboard' : 'Login'}
        </button>
      </div>
    </div>
  );
};
