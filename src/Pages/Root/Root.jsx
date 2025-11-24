import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { SyncLoader } from 'react-spinners';

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-275px)] bg-[#D2D2D2]">
        {isLoading ? (
          <div className="flex justify-center items-center pt-20">
            <SyncLoader></SyncLoader>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
