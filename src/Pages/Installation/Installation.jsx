import downloadIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import dropdownimg from '../../assets/down-arrow.png';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SyncLoader } from 'react-spinners';

const Installation = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const notify = () => toast(' Uninstall Successfully');

  // -------- SORT FUNCTIONS --------
  const sortSmallToLarge = () => {
    setLoading(true);
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem('installedApps')) || [];
      const sorted = [...saved].sort((a, b) => Number(a.size) - Number(b.size));

      setCards(sorted);
      localStorage.setItem('installedApps', JSON.stringify(sorted));
      setLoading(false);
    }, 700);
  };

  const sortLargeToSmall = () => {
    setLoading(true);
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem('installedApps')) || [];
      const sorted = [...saved].sort((a, b) => Number(b.size) - Number(a.size));

      setCards(sorted);
      localStorage.setItem('installedApps', JSON.stringify(sorted));
      setLoading(false);
    }, 700);
  };

  const handleDelete = (id) => {
    const updated = cards.filter((card) => card.id !== id);
    setCards(updated);

    localStorage.setItem('installedApps', JSON.stringify(updated));
  };

  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('installedApps')) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCards(saved);
  }, []);

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
          <h2 className="text-2xl text-center pt-20">
            {cards.length} Apps Found
          </h2>
        </div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size
            <img src={dropdownimg} className="w-5 h-5"></img>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={sortSmallToLarge}>Low To High</button>
            </li>
            <li>
              <button onClick={sortLargeToSmall}>High To Low</button>
            </li>
          </ul>
        </div>
      </div>

      {/*********************************************************************************************************************************/}

      <div className="w-11/12 mx-auto mt-10 mb-20 grid grid-cols-1 gap-6 pb-15">
        {/* <InstallCard cardData={cardData}></InstallCard> */}
        {loading ? (
          <div className="flex justify-center items-center">
            <SyncLoader></SyncLoader>
          </div>
        ) : (
          cards.map((card) => (
            <div className="card bg-base-100 pl-6 pr-6 flex flex-row items-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <div>
                <img src={card.image} alt={card.title} className="h-25 w-25 " />
              </div>

              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-actions mt-4 ">
                  <div className="badge badge-outline gap-4 font-bold bg-[#00D39010] border-none">
                    <img
                      src={downloadIcon}
                      className="h-3 w-3 inline-block"
                    ></img>

                    <div className="text-[#00D390] font-bold">
                      {card.downloads >= 1000000000
                        ? (card.downloads / 1000000000).toFixed(1) + 'B'
                        : card.downloads >= 1000000
                          ? (card.downloads / 1000000).toFixed(1) + 'M'
                          : card.downloads >= 1000
                            ? (card.downloads / 1000).toFixed(1) + 'K'
                            : card.downloads}
                    </div>
                  </div>
                  <div className="badge badge-outline text-[#FF8811] bg-[#FF881120] border-none">
                    <img
                      src={ratingsIcon}
                      className="h-3 w-3 inline-block"
                    ></img>
                    {card.ratingAvg}
                  </div>
                  <p className="text-gray-500 ml-4"> {card.size} </p>
                </div>
              </div>
              <button
                onClick={() => {
                  handleDelete(card.id);
                  notify();
                }}
                className="text-xl bg-[#00D390] btn text-white"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
