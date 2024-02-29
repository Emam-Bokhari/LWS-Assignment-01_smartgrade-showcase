import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

export default function App() {
  return (
    <Fragment>
      <div className="bg-[#172227] font-[Inter] text-white" >
        <Navbar />
        <HeroSection />
      </div>
    </Fragment>
  )
}