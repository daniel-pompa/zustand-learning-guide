import { IoPersonOutline, IoMailOutline } from 'react-icons/io5';

interface Props {
  name: string;
  email: string;
  iconSize?: number;
}

interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
  bgColor?: string;
  gradient?: string;
  textColor: string;
  shadow?: string;
}

const InfoItem = ({
  icon,
  text,
  bgColor = 'bg-gray-100',
  gradient,
  textColor,
  shadow = 'shadow-none',
}: InfoItemProps) => {
  const backgroundClass = gradient ? gradient : bgColor;

  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-md ${backgroundClass} ${textColor} ${shadow}`}
    >
      <div className='p-1 bg-white rounded-full'>{icon}</div>
      <span className='text-sm font-medium'>{text}</span>
    </div>
  );
};

export const PersonSection = ({ name, email, iconSize = 20 }: Props) => {
  return (
    <section className='w-full grid gap-2 grid-cols-1 mt-2' aria-labelledby='person-info'>
      <InfoItem
        icon={<IoPersonOutline size={iconSize} className='text-blue-600' />}
        text={name}
        bgColor='bg-blue-100'
        textColor='text-blue-800'
      />
      <InfoItem
        icon={<IoMailOutline size={iconSize} className='text-indigo-600' />}
        text={email}
        bgColor='bg-indigo-100'
        textColor='text-indigo-800'
      />
    </section>
  );
};
