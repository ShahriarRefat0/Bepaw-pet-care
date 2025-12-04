import React, { use, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import SpinnerLoading from "./SpinnerLoading";

const SignUp = () => {
  const [loading, setLoading] = useState(true)
  const [showPass, setShowPass] = useState(false);
  const { setUser, createUser, updatePro, loginWithGoogle } =
    use(AuthContext);
  const [currentImg, setCurrentImg] = useState(0);
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();
    const form = e.target;
    const displayName = form.name?.value;
    const photoURL = form.photoUrl?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validPass.test(password)) {
      setPassError(
        "Password must have an uppercase letter, lowercase letter, and at least 6 characters"
      );
      return;
    }
    setPassError("");
    // console.log("submit", name, photoUrl, email, password);

    createUser(email, password)
      .then((res) => {
        updatePro(displayName, photoURL)
          .then(() => {
            //console.log(res.uer)
            const user = res.user;
            setUser(user);
            toast.success("Registered Successfully");
            navigate("/");
          })
          .catch(() => {
            toast.error("Oops! Something went wrong");
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Please log in instead!"
          );
          navigate('/')
          return
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      });
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then((res) => {
        //console.log(res.user)
        const user = res.user;
        setUser(user);
        navigate("/");
        toast.success("Successfully LogIn ");
      })
      .catch((e) => {
        // console.log(e)
        toast.error("Something went wrong. Please try again.");

      });
  };

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
    return () => clearTimeout(timer);
  }, [])

  if (loading) return <SpinnerLoading></SpinnerLoading>

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between overflow-clip p-6 md:p-16 gap-8">
      {imgs.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${index === currentImg ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white text-center md:text-left max-w-md px-4 md:px-8 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome To <br />
          <span className="text-orange-400">Bepaw Pet World</span>
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Sign Up & Explore
        </h3>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Join Bepaw Pet World today and give your furry friends the love and
          care they deserve! Create your account to access tips, services, and a
          community of pet lovers.
        </p>
      </div>

      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-sm mx-auto md:mr-8 bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/30 shadow-2xl animate__animated animate__fadeInRight"
      >
        <fieldset className="fieldset text-white">
          <legend className="fieldset-legend text-2xl font-semibold text-white mb-4 text-center">
            Sign Up
          </legend>

          <label className="label text-sm">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input input-bordered w-full bg-white/20 placeholder-white/70 text-white"
            placeholder="Enter your name"
          />

          <label className="label text-sm md:mt-4 mt-1">Photo URL</label>
          <input
            required
            name="photoUrl"
            type="text"
            className="input input-bordered w-full bg-white/20 placeholder-white/70 text-white"
            placeholder="Enter your photo url"
          />

          <label className="label text-sm md:mt-4 mt-1">Email</label>
          <input
            required
            name="email"
            type="email"
            className="input input-bordered w-full bg-white/20 placeholder-white/70 text-white"
            placeholder="Enter your email"
          />

          <div className="relative">
            <label className="label text-sm md:mt-4 mt-1">Password</label>
            <input
              required
              name="password"
              type={showPass ? "text" : "password"}
              className="input input-bordered w-full bg-white/20 placeholder-white/70 text-white"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-[15px] top-[45px] cursor-pointer z-50"
            >
              {showPass ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
            </span>
          </div>
          {passError && <p className="text-rose-500 text-sm">{passError}</p>}
          <button
            type="submit"
            className="btn md:mt-6 mt-3 w-full bg-black/70 text-white border border-white/40 hover:bg-white/40  hover:border-black transition-all duration-300 rounded-lg shadow-md"
          >
            Register
          </button>

          <div className="divider text-white/80">OR</div>

          <button
            onClick={handleLoginWithGoogle}
            className="btn w-full hover:bg-black/70 bg-white/20 text-white border-0 hover:border-white flex items-center justify-center gap-2 transition-all duration-300"
          >
            <FaGoogle className="text-red-400 text-lg" />
            Login with Google
          </button>

          <p className="text-sm pt-3">
            If already have an account! Please{" "}
            <Link
              to="/login"
              className="hover:underline text-orange-300 cursor-pointer"
            >
              LogIn
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
