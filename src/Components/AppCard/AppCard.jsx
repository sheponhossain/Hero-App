import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const AppCard = ({ cardData }) => {
  return (
    <div className="grid grid-cols-4 gap-6 pb-10">
      {cardData.map((data) => (
        <div
          key={data.id}
          className="card bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <figure>
            <img
              src={data.image}
              alt={data.title}
              className="min-h-60 max-w-58 mt-2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <div className="card-actions justify-between mt-4 ">
              <div
                // onClick={() => setCardData(...cardData, data)}
                className="badge badge-outline font-bold bg-[#00D39010] border-none"
              >
                <img src={downloadIcon} className="h-3 w-3 inline-block"></img>
                <Link state={data} to={`/installation`}>
                  <div className="text-[#00D390] font-bold">
                    {data.downloads >= 1000000000
                      ? (data.downloads / 1000000000).toFixed(1) + 'B'
                      : data.downloads >= 1000000
                        ? (data.downloads / 1000000).toFixed(1) + 'M'
                        : data.downloads >= 1000
                          ? (data.downloads / 1000).toFixed(1) + 'K'
                          : data.downloads}
                  </div>
                </Link>
              </div>
              <div className="badge badge-outline text-[#FF8811] bg-[#FF881120] border-none">
                {data.ratingAvg}
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default AppCard;
