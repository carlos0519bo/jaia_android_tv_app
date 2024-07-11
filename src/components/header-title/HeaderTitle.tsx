import { cn } from '../../utils';

type HeaderTitleProps = {
  title: string;
  className?: string;
};

export const HeaderTitle = ({
  title,
  className: argsClassName,
}: HeaderTitleProps) => {
  const titleFormat = title.replace(/-/g, ' ');

  return (
    <div className={cn('flex justify-between py-10', argsClassName)}>
      <h2 className="text-2xl font-bold">{titleFormat}</h2>
    </div>
  );
};
