import { QueryClientProvider } from '@tanstack/react-query';
import { RouterApp } from './router/Router';
import { queryClient } from './lib';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterApp />
    </QueryClientProvider>
  );
};

export default App;