import React from 'react';
import Error404Image from '../../assets/error-404.png';
import { useNavigate } from 'react-router';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={Error404Image} alt="404 Error" className="mx-auto" />
      <h1 className="text-3xl text-center text-gray-600 font-semibold">
        Oops, page not found!
      </h1>
      <p className="text-center text-gray-400 mt-4">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center pt-10 pb-10">
        <button
          onClick={() => navigate(-1)}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-5 text-white rounded-lg font-semibold border-none"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default Error404;
