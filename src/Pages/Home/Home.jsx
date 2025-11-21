import googleLogo from '../../assets/google.png';
import appStore from '../../assets/AppStore.png';
import herologo from '../../assets/hero.png';
import { Link, NavLink } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center ">
      <h1 className="text-7xl text-center text-[#001931] font-semibold pt-20">
        We Build
        <br />
        <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
          Productive
        </span>
        Apps
      </h1>
      <p className="mt-2 text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br></br> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-3 justify-center mt-4 mb-6">
        <NavLink to={`https://play.google.com/store/games?hl=en`}>
          <div className="border border-gray-400 h-12 w-40 flex items-center justify-center gap-2 px-2">
            <img src={googleLogo}></img> Google Play
          </div>
        </NavLink>
        <NavLink to={`https://www.apple.com/app-store/`}>
          <div className="border border-gray-400 h-12 w-40 flex items-center justify-center gap-2 px-2">
            <img src={appStore}></img>
            App Store
          </div>
        </NavLink>
      </div>
      <div className="flex justify-center">
        <img
          src={herologo}
          alt="Herologo"
          className="h-[390px] w-6/12 flex items-center justify-center "
        ></img>
      </div>

      <div className="w-full h-[350px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] ">
        <h1 className="text-3xl text-white font-semibold pt-12">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex gap-16 justify-center mt-10">
          <div>
            <p className="text-gray-300 mt-4">Total Downloads </p>
            <h1 className="text-4xl text-white font-bold mt-2">29.6M</h1>
            <p className="text-gray-300 mt-4">21% more than last month </p>
          </div>
          <div>
            <p className="text-gray-300 mt-4">Total Reviews</p>
            <h1 className="text-4xl text-white font-bold mt-2">906K</h1>
            <p className="text-gray-300 mt-4">46% more than last month</p>
          </div>
          <div>
            <p className="text-gray-300 mt-4">Active Apps</p>
            <h1 className="text-4xl text-white font-bold mt-2">132+</h1>
            <p className="text-gray-300 mt-4">31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* Trending Apps */}
      <div>
        <h1 className="text-3xl text-center text-[#001931] font-semibold pt-12">
          Trending Apps
        </h1>
        <p className="mt-2 text-[#627382] pb-4">
          Explore our most popular and highly rated apps loved by users
          worldwide.
        </p>
        <div className="w-11/12 mx-auto">
          {/* Cards Component */}
          <Cards data={data}></Cards>
        </div>
        <div>
          <Link to={'/apps'} className="btn btn-primary mt-6 mb-10">
            See All Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
