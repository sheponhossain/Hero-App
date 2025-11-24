import React, { useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import likeIcon from '../../assets/icon-review.png';
import BarCharts from '../BarChart/BarChart';
import { Link, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const CardDetails = () => {
  const notify = () => toast.success('Successfully Installed');
  const [installed, setInstalled] = useState(false);
  const cardLocation = useLocation();

  const handleInstall = () => {
    notify();
    setInstalled(true);
  };

  const {
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    title,
  } = cardLocation.state;
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex sm:gap-6 gap-2 pt-8">
        <div>
          <img src={image} className="w-70 h-70" alt="Card Detail" />
        </div>
        <div>
          <div>
            <h2 className="text-4xl">{title}</h2>
            <p className=" mt-2">
              <span className="text-gray-500">Developed by </span>
              <span className="text-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="my-2 min-w-full border-gray-500" />
          <div className="flex sm:gap-10 gap-2 items-center mt-4">
            <div>
              <img src={downloadIcon} className="" alt="download Icon"></img>
              <h1 className="mt-2">Downloads</h1>
              {/* <h2 className="text-4xl font-semibold mt-2">{downloads}</h2> */}
              <div className="sm:text-4xl font-semibold mt-2">
                {downloads >= 1000000000
                  ? (downloads / 1000000000).toFixed(1) + 'B'
                  : downloads >= 1000000
                    ? (downloads / 1000000).toFixed(1) + 'M'
                    : downloads >= 1000
                      ? (downloads / 1000).toFixed(1) + 'K'
                      : downloads}
              </div>
            </div>
            <div>
              <img src={ratingIcon} alt="rating icon"></img>
              <h1 className="mt-2">Average Ratings</h1>
              <h2 className="sm:text-4xl font-semibold mt-2">{ratingAvg}</h2>
            </div>
            <div>
              <img src={likeIcon} alt="like icon"></img>
              <h1 className="mt-2">Total Reviews</h1>
              {/* <h2 className="text-4xl font-semibold mt-2">{reviews}</h2> */}
              <div className="sm:text-4xl font-semibold mt-2">
                {reviews >= 1000000000
                  ? (reviews / 1000000000).toFixed(1) + 'B'
                  : reviews >= 1000000
                    ? (reviews / 1000000).toFixed(1) + 'M'
                    : reviews >= 1000
                      ? (reviews / 1000).toFixed(1) + 'K'
                      : reviews}
              </div>
            </div>
          </div>
          <Link
            onClick={handleInstall}
            state={cardLocation.state}
            // to={'/installation'}
            disabled={installed}
            className={`btn mt-5 border-none text-white 
             ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
          >
            {installed ? 'Installed ✔' : `Install Now (${size})`}
            <ToastContainer></ToastContainer>
          </Link>
        </div>
      </div>
      <hr className="my-10 border-gray-500" />

      {/* Ratings Chart section */}
      <div>
        <h1 className="text-3xl font-semibold mb-4">Ratings</h1>
        <BarCharts cardLocation={cardLocation}></BarCharts>
      </div>
      <hr className=" border-gray-500" />

      {/* description section  */}
      <div>
        <h1 className="text-2xl mt-10">Description</h1>
        <p className="mt-10 pb-10 text-gray-500"> {description} </p>
      </div>
    </div>
  );
};

export default CardDetails;
