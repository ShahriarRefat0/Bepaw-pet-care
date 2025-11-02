import Hero from "../Components/Hero";
import Services from "./Services";
import CareTips from "../Components/CareTips";
import Vats from "../Components/Vats";
import FAQ from "../Components/FAQ";
import SpinnerLoading from "./SpinnerLoading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section className="">
        <Services></Services>
      </section>
      <section>
        <CareTips></CareTips>
      </section>
      <section>
        <Vats></Vats>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
    </div>
  );
};

export default Home;
