import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5';

import { useBearStore, usePersonStore, useTaskStore } from '@stores';
import { TaskCounts } from '@interfaces';
import {
  WhiteCard,
  BearStatsSection,
  TaskStatsSection,
  PersonSection,
  WeddingDetailsCard,
} from '@components';
import { useWeddingData } from '@hooks';

export const DashboardPage = () => {
  // Bear store state
  const blackBears = useBearStore(state => state.blackBears);
  const polarBears = useBearStore(state => state.polarBears);
  const pandaBears = useBearStore(state => state.pandaBears);
  const totalBears = useBearStore(state => state.totalBears || (() => 0));

  // Person store state
  const person = usePersonStore(state => `${state.firstName} ${state.lastName}`);
  const email = usePersonStore(state => state.email);

  // Task store state
  const tasks = useTaskStore(state => state.tasks);

  // Compute task counts by status
  const taskCounts = Object.values(tasks).reduce<TaskCounts>(
    (acc, task) => {
      acc.total++;
      acc[task.status]++;
      return acc;
    },
    { total: 0, pending: 0, inProgress: 0, done: 0 }
  );

  // Wedding store state
  const { firstName, guestCount, getFormattedDate, getFormattedTime, isConfirmed } =
    useWeddingData();

  return (
    <>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <p className='mt-2 text-gray-700'>
        Overview of application state across all stores
      </p>
      <hr className='my-4 border-gray-200' />

      {/* Card grid layout */}
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 animate__animated animate__fadeIn'>
        {/* Bear tracker */}
        <WhiteCard centered>
          <CardIcon
            icon={
              <IoPawOutline
                size={32}
                className='text-indigo-600'
                aria-label='Bear icon'
              />
            }
            bg='bg-gradient-to-br from-indigo-100 to-indigo-300'
            shadow='shadow-indigo-300 shadow-md'
          />
          <h3 className='font-medium'>Bear Tracker</h3>
          <p className='text-gray-700 mb-4'>Bear counter</p>
          <BearStatsSection
            totalBears={totalBears()}
            blackBears={blackBears}
            polarBears={polarBears}
            pandaBears={pandaBears}
          />
        </WhiteCard>
        {/* Person information */}
        <WhiteCard centered>
          <CardIcon
            icon={
              <IoAccessibilityOutline
                size={32}
                className='text-blue-600'
                aria-label='Person icon'
              />
            }
            bg='bg-gradient-to-br from-blue-100 to-blue-300'
            shadow='shadow-blue-300 shadow-md'
          />
          <h3 className='font-medium'>Person Store</h3>
          <p className='text-gray-700 mb-2'>Synced from store</p>
          <PersonSection name={person} email={email} />
          <p className='mt-3 text-sm italic text-gray-700'>
            Welcome back, {person.split(' ')[0]}!
          </p>
        </WhiteCard>
        {/* Task manager */}
        <WhiteCard centered>
          <CardIcon
            icon={
              <IoListOutline
                size={32}
                className='text-emerald-600'
                aria-label='Task list icon'
              />
            }
            bg='bg-gradient-to-br from-emerald-100 to-emerald-300'
            shadow='shadow-emerald-300 shadow-md'
          />
          <h3 className='font-medium'>Task Manager</h3>
          <p className='text-gray-700 mb-4'>Task overview</p>
          <TaskStatsSection
            total={taskCounts.total}
            pending={taskCounts.pending}
            inProgress={taskCounts.inProgress}
            done={taskCounts.done}
          />
        </WhiteCard>
        {/* Wedding invitation details */}
        <WhiteCard centered>
          <CardIcon
            icon={
              <IoHeartOutline
                size={32}
                className={isConfirmed ? 'text-pink-600' : 'text-gray-400'}
                aria-label='Wedding icon'
              />
            }
            bg={
              isConfirmed
                ? 'bg-gradient-to-br from-pink-100 to-pink-300'
                : 'bg-gradient-to-br from-gray-100 to-gray-300'
            }
            shadow={
              isConfirmed ? 'shadow-pink-300 shadow-md' : 'shadow-gray-300 shadow-md'
            }
          />
          <h3 className='font-medium'>
            {isConfirmed ? 'Your Attendance' : 'RSVP Status'}
          </h3>
          <p className='text-gray-700 mb-4'>
            {isConfirmed ? 'Glad you can make it!' : "You're not attending."}
          </p>
          <WeddingDetailsCard
            guestCount={isConfirmed ? guestCount : 0}
            date={getFormattedDate}
            time={getFormattedTime}
            isConfirmed={isConfirmed}
            firstName={firstName}
          />
        </WhiteCard>

        {/* Authentication */}
        <WhiteCard centered>
          <CardIcon
            icon={
              <IoLockClosedOutline
                size={32}
                className='text-orange-600'
                aria-label='Authentication icon'
              />
            }
            bg='bg-gradient-to-br from-orange-100 to-orange-300'
            shadow='shadow-orange-300 shadow-md'
          />
          <h3 className='font-medium'>Authentication</h3>
          <p className='text-gray-700 mb-4'>Secure access control</p>
          <p className='text-sm text-gray-600'>Coming soon</p>
        </WhiteCard>
      </div>
    </>
  );
};

interface CardIconProps {
  icon: React.ReactNode;
  bg: string;
  shadow?: string;
}

const CardIcon = ({ icon, bg, shadow }: CardIconProps) => (
  <div
    className={`${bg} ${shadow} p-4 rounded-full mb-4 flex items-center justify-center`}
  >
    {icon}
  </div>
);
