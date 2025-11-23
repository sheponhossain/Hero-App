import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-275px)] bg-[#D2D2D2]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
