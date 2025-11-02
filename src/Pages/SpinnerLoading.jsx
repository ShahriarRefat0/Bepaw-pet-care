import React from 'react';
import { ClipLoader } from "react-spinners";


const SpinnerLoading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ClipLoader color="#ffaa0d" size={50} />
    </div>
  );
};

export default SpinnerLoading;