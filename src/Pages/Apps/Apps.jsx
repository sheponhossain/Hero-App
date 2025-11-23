import React from 'react';
import AppCard from '../../Components/AppCard/AppCard';
import { useLoaderData } from 'react-router';

const Apps = () => {
  const appData = useLoaderData();
  const cardData = appData.data;

  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <div className="text-center pt-6">
          <h1 className="text-4xl">Our All Applications</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between pt-10 ">
          <h2 className="text-2xl">(132) Apps Found</h2>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      {/* card section */}
      <div className="w-11/12 mx-auto mt-10 mb-20">
        {/* Cards Component */}
        <AppCard cardData={cardData}></AppCard>
      </div>
    </div>
  );
};

export default Apps;
