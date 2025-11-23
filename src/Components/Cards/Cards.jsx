import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const Cards = ({ cardData }) => {
  if (!cardData || !cardData.data) {
    return <div className="text-center py-10 text-gray-400">Loading...</div>;
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {cardData.data.map((app) => {
        return (
          <div
            key={app.id}
            className="card bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <figure>
              <Link
                onClick={() => {
                  const installed =
                    JSON.parse(localStorage.getItem('installedApps')) || [];

                  if (!installed.some((item) => item.id === app.id)) {
                    installed.push(app);
                    localStorage.setItem(
                      'installedApps',
                      JSON.stringify(installed)
                    );
                  }
                }}
                state={app}
                to={'/card-details'}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="min-h-60 max-w-58 mt-2 bg-white"
                />
              </Link>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <div className="card-actions justify-between mt-4 ">
                <div
                  // onClick={() => setCardData(...cardData, data)}
                  className="badge badge-outline font-bold bg-[#00D39010] border-none"
                >
                  <img
                    src={downloadIcon}
                    className="h-3 w-3 inline-block"
                  ></img>
                  <Link
                    onClick={() => {
                      const installed =
                        JSON.parse(localStorage.getItem('installedApps')) || [];

                      if (!installed.some((item) => item.id === app.id)) {
                        installed.push(app);
                        localStorage.setItem(
                          'installedApps',
                          JSON.stringify(installed)
                        );
                      }
                    }}
                    to={`/installation`}
                  >
                    <div className="text-[#00D390] font-bold">
                      {app.downloads >= 1000000000
                        ? (app.downloads / 1000000000).toFixed(1) + 'B'
                        : app.downloads >= 1000000
                          ? (app.downloads / 1000000).toFixed(1) + 'M'
                          : app.downloads >= 1000
                            ? (app.downloads / 1000).toFixed(1) + 'K'
                            : app.downloads}
                    </div>
                  </Link>
                </div>
                <div className="badge badge-outline text-[#FF8811] bg-[#FF881120] border-none">
                  <img src={ratingsIcon} className="h-3 w-3 inline-block"></img>
                  {app.ratingAvg}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
