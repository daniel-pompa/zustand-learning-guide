import { IconStatItem } from '@components';
import {
  IoListOutline,
  IoTimeOutline,
  IoSyncOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';

interface Props {
  total: number;
  pending: number;
  inProgress: number;
  done: number;
}

const taskStats = [
  {
    label: 'Total tasks',
    icon: <IoListOutline size={22} className='text-gray-500' />,
    color: 'bg-gray-100 text-gray-700',
  },
  {
    label: 'Pending',
    icon: <IoTimeOutline size={22} className='text-amber-500' />,
    color: 'bg-amber-100 text-amber-700',
  },
  {
    label: 'In progress',
    icon: <IoSyncOutline size={22} className='text-indigo-500' />,
    color: 'bg-indigo-100 text-blue-700',
  },
  {
    label: 'Done',
    icon: <IoCheckmarkCircleOutline size={22} className='text-emerald-500' />,
    color: 'bg-emerald-100 text-emerald-700',
  },
];

export const TaskStatsSection = ({ total, pending, inProgress, done }: Props) => {
  const values = [total, pending, inProgress, done];

  return (
    <section className='w-full grid gap-2 grid-cols-1' aria-labelledby='task-stats'>
      {taskStats.map((status, idx) => (
        <IconStatItem
          key={status.label}
          icon={status.icon}
          label={status.label}
          value={values[idx]}
          color={status.color}
        />
      ))}
    </section>
  );
};
