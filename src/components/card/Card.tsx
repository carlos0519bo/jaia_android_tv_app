import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { images } from '../../assets';
import { STORAGE_URL } from '../../config';
import { Radio } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeaturedContent } from '../../api/featured/types';
import { Categories } from '../../layouts/types';

type CardProps<T extends FeaturedContent | Categories> = {
  data: T;
  toPlay?: boolean;
  category_slug?: string;
  to?: string;
};

export const Card = <T extends FeaturedContent | Categories>({
  data,
  category_slug = '',
  to,
}: CardProps<T>) => {
  const [videoTitle, setVideoTitle] = useState('');

  const navigate = useNavigate();

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    img.onerror = null;
    img.src = images.noImage;
    img.alt = 'No image';
  };

  const { title, static_image_url, image, id, slug = '' } = data || {};

  const inLive = 'EN DIRECTO';

  useEffect(() => {
    if (title.includes(inLive)) {
      setVideoTitle(title.replace(inLive, ''));
    } else {
      setVideoTitle(title);
    }
  }, [title]);

  const imageCard = static_image_url || image;

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(`/category/${category_slug}/subcategory/${slug}`, {
        state: { title, id },
      });
    }
  };

  return (
    <div
      className="card w-full hover:scale-105 transition cursor-pointer rounded-2xl"
      onClick={handleNavigate}
    >
      <figure className="h-64 w-full shadow-2xl rounded-2xl">
        <LazyLoadImage
          src={STORAGE_URL + imageCard}
          alt={data.title}
          className="w-full h-full object-cover object-center"
          onError={handleImageError}
          effect="blur"
          height={'100%'}
          width={'100%'}
        />
      </figure>
      <div className="bg-transparent h-16 flex items-center justify-center p-4">
        <h2 className="card-title text-base capitalize text-white">
          {videoTitle}
        </h2>
      </div>
      {title.includes(inLive) && (
        <div className="badge badge-error text-white gap-1 absolute top-3 right-4 text-xs">
          <Radio size={14} />
          En directo
        </div>
      )}
    </div>
  );
};
