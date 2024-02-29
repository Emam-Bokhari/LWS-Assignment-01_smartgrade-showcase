import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import StudentsTable from "./components/StudentsTable/StudentsTable";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Fragment>

      <div className="bg-[#172227] font-[Inter] text-white" >

        <Navbar />

        <HeroSection />

        <StudentsTable />

        <Footer />

      </div>

    </Fragment>
  )
}