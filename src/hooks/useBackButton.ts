import { useEffect } from 'react';
import { Plugins } from '@capacitor/core';
import { useNavigate } from 'react-router-dom';

const { App } = Plugins;

export const useBackButton = (toHome?: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      if (toHome) {
        navigate('/');
      } else {
        navigate(-1);
      }
    };

    const backHandler = App.addListener('backButton', handleBackButton);

    return () => {
      backHandler.remove();
    };
  }, [navigate, toHome]);
};
