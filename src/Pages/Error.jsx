import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router';
import img from '../../public/error.png'
const Error = () => {
  return (
    <div className="bg-[#F5F1EC] min-h-screen my-auto py-16 px-4 min-w-screen flex md:flex-row flex-col items-center justify-center mx-auto">
      <div>
        <img src={ img} alt="" />
   </div>
      <div >
      
        <h1 className='text-[140px] font-bold text-[#F8721F] '>
          404
        </h1>
        <h3 className='text-4xl font-bold py-5'>Oops! Nothing Was Found</h3>
        <p className='text-lg'>Sorry, we couldn’t find the page  you where looking for. <br /> We suggest that you return to homepage.</p>
        <Link to='/' className='btn bg-[#F8721F] text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300 mt-5'><FaHome /> Bank to home</Link>
      </div>
    </div>
  );
};

export default Error;