import React from 'react';
import ErrorAppImage from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';

const ErrorApp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={ErrorAppImage} alt="404 Error" className="mx-auto pt-6" />
      <h1 className="text-3xl text-center font-semibold">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-center text-gray-400 mt-4">
        The App you are requesting is not found on our system. please try
        another apps
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

export default ErrorApp;
