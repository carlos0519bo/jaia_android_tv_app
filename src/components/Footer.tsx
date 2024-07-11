import { Instagram, Twitter, Twitch, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TikTokIcon } from './icons';
import { cn } from '../utils';

const links = [
  {
    title: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/jaiateve',
  },
  {
    title: 'Tiktok',
    icon: <TikTokIcon />,
    url: 'https://www.tiktok.com/@tvjaia',
  },
  { title: 'Twitter', icon: <Twitter />, url: 'https://twitter.com/tvjaia' },
  { title: 'Twitch', icon: <Twitch />, url: 'https://www.twitch.tv/JAIATV' },
  {
    title: 'Facebook',
    icon: <Facebook />,
    url: 'https://www.facebook.com/jaiateve',
  },
] as const;

export const Footer = () => {
  const footerClasses = cn(
    'w-full bg-opacity-25 bg-gray-900 text-white h-auto md:h-30 px-4 lg:px-20 xl:px-0 sticky bottom-0'
  );

  const navigate = useNavigate();

  return (
    <footer>
      <div className="h-20 sticky">{/* <Banner /> */}</div>
      <div className={footerClasses}>
        <div className="xl:w-[1040px] py-4 mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-1 gap-4 font-semibold">
            <p
              className="m-auto md:m-0 cursor-pointer"
              onClick={() => navigate('/cookies-policy')}
            >
              COOKIES
            </p>
            <p className="m-auto md:m-0 cursor-pointer">CONTACTO</p>
            <p className="m-auto md:m-0 cursor-pointer">AVISO LEGAL</p>
            <p className="m-auto md:m-0 cursor-pointer">
              POLÍTICA DE PRIVACIDAD
            </p>
            <p className="m-auto md:m-0 cursor-pointer">
              BASES DE PARTICIPACIÓN
            </p>
            <div className="flex gap-4 m-auto md:justify-end">
              {links.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tooltip"
                  data-tip={item.title}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <p className="mb-10 md:mb-0 text-sm text-center">
              JAIA {new Date().getFullYear()} SL, CIF: B55403083, C/Portuetxe
              n.º 83, CP 20.018, Donostia-San Sebastián, Guipuzcoa - España.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
