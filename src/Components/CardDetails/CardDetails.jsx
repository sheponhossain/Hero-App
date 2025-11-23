import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import likeIcon from '../../assets/icon-review.png';
import demoimg from '../../assets/demo-app (5).webp';
import BarCharts from '../BarChart/BarChart';

const CardDetails = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex gap-6 pt-8">
        <div>
          <img src={demoimg} className="w-70 h-70" alt="Card Detail" />
        </div>
        <div>
          <div>
            <h2 className="text-4xl">SmPlan:ToDo List with Reminder</h2>
            <p className=" mt-2">
              <span className="text-gray-500">Developed by </span>
              <span className="text-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                productive.io
              </span>
            </p>
          </div>
          <hr className="my-2 min-w-full border-gray-500" />
          <div className="flex gap-10 items-center mt-4">
            <div>
              <img src={downloadIcon} className="" alt="download Icon"></img>
              <h1 className="mt-2">Downloads</h1>
              <h2 className="text-4xl font-semibold mt-2">1.2M</h2>
            </div>
            <div>
              <img src={ratingIcon} alt="rating icon"></img>
              <h1 className="mt-2">Average Ratings</h1>
              <h2 className="text-4xl font-semibold mt-2">1.2M</h2>
            </div>
            <div>
              <img src={likeIcon} alt="like icon"></img>
              <h1 className="mt-2">Total Reviews</h1>
              <h2 className="text-4xl font-semibold mt-2">1.2M</h2>
            </div>
          </div>
          <button className="btn mt-5 bg-[#00D390] border-none text-white ">
            Install Now (291 MB)
          </button>
        </div>
      </div>
      <hr className="my-10 border-gray-500" />
      <div>
        <h1 className="text-3xl font-semibold mb-4">Ratings</h1>
        <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default CardDetails;
