import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  centered?: boolean; // Center content horizontally
  className?: string; // Optional additional classes
}

export const WhiteCard = ({ children, centered = false, className }: Props) => {
  return (
    <div
      className={classNames(
        'bg-white border rounded-xl shadow-lg w-full p-6',
        className,
        {
          'text-center flex flex-col items-center': centered,
        }
      )}
    >
      {children}
    </div>
  );
};
