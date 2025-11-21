import React from 'react';
import dropdownimg from '../../assets/down-arrow.png';
import InstallCard from '../../Components/InstallCard/InstallCard';

const Installation = ({ data }) => {
  return (
    <div>
      <div className="text-center pt-10">
        <h1 className="text-4xl">Your Installed Apps</h1>
        <p className="text-gray-400 pt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center w-11/12 mx-auto text-center">
        <div>
          <h2 className="text-2xl text-center pt-20">1 Apps Found</h2>
        </div>
        <div className="dropdown pt-20 flex justify-between items-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
            <img src={dropdownimg} className="w-5 h-5"></img>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Sort By Size</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-10 mb-20">
        {/* Cards Component */}
        <InstallCard data={data}></InstallCard>
      </div>
    </div>
  );
};

export default Installation;
