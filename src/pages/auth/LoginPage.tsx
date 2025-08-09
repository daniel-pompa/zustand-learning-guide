import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiExclamationCircle } from 'react-icons/hi';
import { useAuthStore } from '@stores';

export const LoginPage = () => {
  const login = useAuthStore(state => state.login);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Extract form elements with proper typing
    const { email, password, remember } = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      remember: { checked: boolean };
    };

    // Attempt login with Zustand store method
    const success = login(email.value, password.value);

    if (success) {
      // Redirect to dashboard on successful login
      navigate('/dashboard');
    } else {
      // Show error message on failure
      setError('Invalid email or password');
    }

    // Reset form fields (optional)
    email.value = '';
    password.value = '';
    remember.checked = false;
  };

  return (
    <>
      {/* Heading */}
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>Welcome Back</h1>
      <p className='text-gray-500 mb-6 text-sm'>Login to your account to continue</p>

      {/* Error message */}
      {error && (
        <div
          className='flex items-center gap-2 text-sm text-red-800 bg-red-100 border border-red-300 rounded-md px-4 py-3 mb-4 shadow-sm'
          role='alert'
          aria-live='assertive'
        >
          <HiExclamationCircle className='w-5 h-5  text-red-600 shrink-0' />
          <span className='font-medium'>{error}</span>
        </div>
      )}

      <form onSubmit={onSubmit} className='space-y-6'>
        {/* Email input */}
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-600 mb-1'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='off'
            required
            defaultValue='john.doe@example.com'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        {/* Password input */}
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-600 mb-1'
          >
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='off'
            required
            defaultValue='123456'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        {/* Remember me checkbox */}
        <div className='flex items-center justify-between text-sm'>
          <label className='flex items-center gap-2 text-gray-600'>
            <input
              id='remember'
              name='remember'
              type='checkbox'
              className='accent-indigo-600'
            />
            Remember me
          </label>
          {/* Forgot password link */}
          <a href='#' className='text-indigo-600 hover:underline transition-all'>
            Forgot password?
          </a>
        </div>
        {/* Submit button */}
        <button
          type='submit'
          className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md shadow transition-all'
        >
          Login
        </button>
      </form>
      {/* Sign up link */}
      <div className='mt-6 text-center text-sm text-gray-600'>
        Don't have an account?{' '}
        <a href='#' className='text-indigo-600 hover:underline transition-all'>
          Register
        </a>
      </div>
    </>
  );
};
