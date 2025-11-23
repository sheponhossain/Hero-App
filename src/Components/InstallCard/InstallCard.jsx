import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const InstallCard = ({ cardData }) => {
  if (!cardData) {
    return <div className="text-center py-10 text-gray-400">Loading...</div>;
  }
  console.log(cardData);
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <figure>
          <img
            src={cardData.image}
            alt={cardData.title}
            className="min-h-60 max-w-58 mt-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardData.title}</h2>
          <div className="card-actions justify-between mt-4 ">
            <div className="badge badge-outline font-bold bg-[#00D39010] border-none">
              <img src={downloadIcon} className="h-3 w-3 inline-block"></img>
              <Link to={`/installation`}>
                <div className="text-[#00D390] font-bold">
                  {cardData.downloads >= 1000000000
                    ? (cardData.downloads / 1000000000).toFixed(1) + 'B'
                    : cardData.downloads >= 1000000
                      ? (cardData.downloads / 1000000).toFixed(1) + 'M'
                      : cardData.downloads >= 1000
                        ? (cardData.downloads / 1000).toFixed(1) + 'K'
                        : cardData.downloads}
                </div>
              </Link>
            </div>
            <div className="badge badge-outline text-[#FF8811] bg-[#FF881120] border-none">
              {cardData.ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallCard;
