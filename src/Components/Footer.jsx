import React from "react";
import logo from "../assets/logo-1.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="bg-[#F5F1EC] shadow-md dark:bg-[#1A1613] dark:text-gray-300 text-gray-700">
      <footer className="  ">
        <div className="footer sm:footer-horizontal  w-11/12 mx-auto md:py-20 py-10 ">
          <aside>
            <Link to="/" className="cursor-pointer  flex gap-2">
              <img className="md:w-18 w-13" src={logo} alt="" />
              <div>
                <h4 className="text-[17px] font-medium">Bepaw</h4>
                <p className="text-[12px]">Pet Care & Shop</p>
              </div>
            </Link>
            <p>
              Bepaw is a convenience services to the <br /> adaptability. We
              care about every pet of our <br /> clients and provide all kinds
              of pet <br /> carebr services in New York.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Contact Us</h6>
            <a className="link link-hover flex items-center gap-2">
              <IoLocationOutline />
              69/A, Baridhara, Dhaka
            </a>
            <a className="link link-hover flex items-center gap-2">
              <IoCallOutline /> (+88) 0123-456-789
            </a>
            <a className="link link-hover flex items-center gap-2">
              <IoMailOutline />
              contact@bepaw.com
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Cooke Policy</a>
            <a className="link link-hover">privacy policy </a>
            <a className="link link-hover">Terms and Conditions</a>
          </nav>
          <nav className="">
            <div>
              <h6 className="footer-title">Social Link</h6>
              <div className="flex  items-center gap-2">
                <a className="link link-hover text-[#F8721F] hover:text-gray-700  transition-all duration-300">
                  <FaSquareInstagram size={30} />
                </a>
                <a className="link link-hover text-[#F8721F] hover:text-gray-700  transition-all duration-300">
                  <FaFacebookSquare size={30} />
                </a>
                <a className="link link-hover text-[#F8721F] hover:text-gray-700  transition-all duration-300">
                  <IoLogoYoutube size={30} />
                </a>
                <a className="link link-hover text-[#F8721F] hover:text-gray-700  transition-all duration-300">
                  <FaSquareWhatsapp size={30} />
                </a>
              </div>
              <div className="pt-4">
                <h6 className="footer-title">Subscription</h6>
                <div className="join">
                  <div>
                    <label className="input validator join-item">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        placeholder="mail@gmail.com"
                        required
                      />
                    </label>
                  </div>
                  <button className="bg-[#F8721F] text-white font-semibold px-6  rounded-r-md hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <div className="footer sm:footer-horizontal footer-center dark:bg-[#1A1613] bg-[#F5F1EC] text-gray-700 dark:text-gray-300 p-5  border-y border-orange-300">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="text-[#F8721F]">Bepaw</span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
