import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoReturnUpBack } from 'react-icons/io5';
import { Link, Links, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import SpinnerLoading from './SpinnerLoading';


const LoginPage = () => {
  const [loading, setLoading] = useState(true)
  const [showPass, setShowPass] = useState(false)
  const { setUser, signinWithPass, loginWithGoogle, passReset } =
    useContext(AuthContext);
  const [currentImg, setCurrentImg] = useState(0);
  const location = useLocation()
  //console.log(location)
  const navigate = useNavigate()
  const emailRef = useRef(null)


  const handleLoginWithGoogle = (e) => {
    e.preventDefault()
    loginWithGoogle()
      .then((res) => {
        //console.log(res.user)
        const user = res.user
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Successfully LogIn ");
      })
      .catch((e) => {
           toast.error("Oops! Something went wrong");
        
    })
    
}
  
  const handleLogin = (e) => {
    e.preventDefault()
    
    const form = e.target
    const email = form.email?.value;
    const password = form.password?.value;
   
    signinWithPass(email, password)
      .then((res) => {
        const user = res.user
        setUser(user)
        toast.success("Successfully LogIn ");
navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((e) => {
      
       if (
        //  e.code === "auth/invalid-credential" ||
         e.code === "auth/user-not-found"
       ) {
         toast.error("No account found. Please register first!");
         navigate("/");
         return;
       } else {
         toast.error("Oops! Something went wrong");
       }
    })

  }
  
  const handleResetPass = (e) => {
 e.preventDefault()
    const email = emailRef.current.value
    if (!email) {
      return toast("⚠️ Please Enter Your Email");
    }
      passReset(email)
        .then((resc) => {
          toast.success("Verify your email")
          navigate("/password-reset", { state: { email } });
        })
        .catch((e) => {
          
          console.log(e.message);
          toast.error("Oops! Something went wrong");
        });
  }


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
  }, [imgs.length])


  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1500);
    return ()=> clearTimeout(timer)
},[])

  if(loading) return <SpinnerLoading></SpinnerLoading>
  
  
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between  p-6 md:p-16 gap-8">
      {imgs.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImg ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div
        className="relative z-10 text-white text-center md:text-left max-w-md px-4 md:px-8 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome Back To <br />
          <span className="text-orange-400">Bepaw Pet World</span>
        </h1>
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Your Pet’s World Awaits — Login Now!
        </h2>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Where love meets care — login and explore pet-friendly insights,
          services, and tips crafted for you and your furry friends!
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 mx-8 w-full max-w-sm bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-2xl animate__animated animate__fadeInRight"
      >
        <fieldset className="fieldset text-white">
          <legend className="fieldset-legend text-2xl font-semibold text-white mb-4 text-center">
            Login
          </legend>

          <label className="label text-sm">Email</label>
          <input
            ref={emailRef}
            name="email"
            required
            type="email"
            className="input input-bordered w-full bg-white/20 placeholder-white/70 text-white"
            placeholder="Enter your email"
          />

          <div className="relative">
            <label className="label text-sm mt-4">Password</label>
            <input
              name="password"
              required
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

          <button
          onClick={handleResetPass}
            type='button'
            className="text-sm hover:underline pt-3 text-orange-300 cursor-pointer">
            Forget Password ?
          </button>

          <button
            type="submit"
            className="btn mt-6 bg-black/70 text-white border border-white/40 hover:bg-white/20 hover:border-black transition-all duration-300 rounded-lg shadow-md"
          >
            Login
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
            Don't have an account?{" "}
            <Link to="/signUp" className="hover:underline text-orange-300">
              Please Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;