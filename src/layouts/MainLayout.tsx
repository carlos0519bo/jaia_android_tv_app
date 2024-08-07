import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const MainLayout: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-col min-h-screen bg-[#1D242A]">
      <Navbar />
      <div className="flex-grow px-4 lg:px-20 xl:px-0 xl:w-[1040px] mx-auto">
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
