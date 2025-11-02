import React from "react";
import { useLocation } from "react-router";

const PassResetForm = () => {
  const location = useLocation();
  const email = location.state?.email || {};

  const handleConfirm = () => {
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 rounded-2xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Confirm Your Email
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Please enter your email address to send a verification link.
          </p>

          <fieldset className="fieldset space-y-3">
            <input
              type="email"
              defaultValue={email}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            <button onClick={handleConfirm} className="btn btn-neutral w-full">
              Reset Password
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default PassResetForm;
