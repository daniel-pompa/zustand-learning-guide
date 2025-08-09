import { IoPawOutline } from 'react-icons/io5';
import { IconStatItem } from './IconStatItem';

interface Props {
  totalBears: number;
  blackBears: number;
  polarBears: number;
  pandaBears: number;
}

const bears = [
  {
    label: 'Total bears',
    color: 'bg-indigo-100 text-indigo-700',
    iconColor: 'text-indigo-500',
  },
  {
    label: 'Black bears',
    color: 'bg-gray-100 text-gray-700',
    iconColor: 'text-gray-500',
  },
  {
    label: 'Polar bears',
    color: 'bg-blue-100 text-blue-700',
    iconColor: 'text-blue-500',
  },
  {
    label: 'Panda bears',
    color: 'bg-emerald-100 text-emerald-700',
    iconColor: 'text-emerald-500',
  },
];

export const BearStatsSection = ({
  totalBears,
  blackBears,
  polarBears,
  pandaBears,
}: Props) => {
  const values = [totalBears, blackBears, polarBears, pandaBears];

  return (
    <section className='w-full grid gap-2 grid-cols-1' aria-labelledby='bear-stats'>
      {bears.map((bear, idx) => (
        <IconStatItem
          key={bear.label}
          icon={<IoPawOutline size={22} className={bear.iconColor} />}
          label={bear.label}
          value={values[idx]}
          color={bear.color}
        />
      ))}
    </section>
  );
};
