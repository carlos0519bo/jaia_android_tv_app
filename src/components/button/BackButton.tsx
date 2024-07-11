import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  toHome?: boolean;
};

export const BackButton = ({ toHome }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (toHome) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={handleNavigate}
    >
      <ChevronLeft className="ml-[-8px]" size={26} />
      <span className="text-md font-semibold hidden md:block">Inicio</span>
    </div>
  );
};
