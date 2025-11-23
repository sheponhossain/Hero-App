import React, { useState } from 'react';
import AppCard from '../../Components/AppCard/AppCard';
import { Link, useLoaderData } from 'react-router';
import ErrorApp from '../../Components/Error-App/ErrorApp';

const Apps = () => {
  const appData = useLoaderData();
  const cardData = appData.data;
  const [search, setSearch] = useState('');

  // Filter logic
  const filteredData = cardData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

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
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      {/* card section */}
      <div className="w-11/12 mx-auto mt-10 mb-20">
        {/* Cards Component */}

        {/* <AppCard cardData={filteredData}></AppCard> */}
        {filteredData.length === 0 ? (
          <ErrorApp></ErrorApp>
        ) : (
          <AppCard cardData={filteredData} />
        )}
      </div>
    </div>
  );
};

export default Apps;
