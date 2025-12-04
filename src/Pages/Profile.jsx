import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SpinnerLoading from "./SpinnerLoading";
import toast from "react-hot-toast";

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [currentImg, setCurrentImg] = useState(0);
  const { user, setUser, updatePro } = useContext(AuthContext) || {};
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConfirmUpdate = (e) => {
    e.preventDefault()
    const form = e.target
    const displayName = form.name?.value;
    const photoURL = form.photoURL?.value;
    // console.log(displayName, photoURL)

    updatePro(displayName, photoURL)
      .then((res) => {
        // console.log(res)
        const updatedUser = { ...user, displayName, photoURL };
        setUser(updatedUser);
        toast.success("Profile update successfully")
        setIsModalOpen(false)
        form.reset()
      })
      .catch((e) => {
        console.log(e.message)
        toast.error("Oops! went wrong.")
      })

  }

  // console.log(user)



  const imgs = [
    "https://hermespetworld.ir/wp-content/uploads/2024/09/02-1.jpg",
    "https://i.ibb.co.com/Nn9G9rg8/tran-mau-tri-tam-81l-Vsf-M4g-Q-unsplash.jpg",
    "https://i.ibb.co.com/yc0cntF4/joe-caione-q-O-PIF84-Vxg-unsplash.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imgs.length]);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500);
    return () => clearTimeout(timer)
  }, [])


  if (loading) {
    return <SpinnerLoading></SpinnerLoading>;
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-clip p-6">
      {/* Background Slider */}
      {imgs.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${index === currentImg ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div

        className="relative z-10 w-full max-w-md md:max-w-lg bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/30 shadow-2xl animate__animated animate__fadeIn"
      >
        <fieldset className="fieldset text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Profile Info
          </h1>

          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile Photo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/40"
            />
          </div>

          {/* Name */}
          <div className="text-center mb-4">
            <p className="text-gray-200 text-sm md:text-base">Name</p>
            <p className="text-white font-medium text-lg md:text-xl">
              {user?.displayName || "No Name"}
            </p>
          </div>

          {/* Email */}
          <div className="text-center mb-8">
            <p className="text-gray-200 text-sm md:text-base">Email</p>
            <p className="text-white font-medium text-lg md:text-xl">
              {user?.email || "No Email"}
            </p>
          </div>

          {/* Update Profile Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn w-full bg-black/70 text-white border border-white/40 hover:bg-white hover:text-black hover:border-black transition-all duration-300 rounded-lg shadow-md"
          >
            Update Profile
          </button>
        </fieldset>

        {/* modal */}

        <dialog open={isModalOpen} className="modal">
          <div className="modal-box">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-300">
              Update Your Profile
            </h2>
            <form
              onSubmit={handleConfirmUpdate}
              method="dialog"
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />

              <input
                name="photoURL"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full"
                required
              />
              <button type="submit" className="btn btn-neutral w-full">
                Confirm
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Profile;
