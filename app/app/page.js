import Image from "next/image";
import Header from "./Components/Header";
import Hero  from "./Components/Hero";
import Engineer from "./Components/Engineer";
import Openions from "./Components/Openions";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Sponsers from "./Components/Sponsers";
import LatestProj from "./Components/LatestProj";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center">
      {/* <Header /> */}
      <Hero />
      <Engineer />
      <LatestProj/>
      <Team/>
      <Openions />
      <Sponsers/>
      {/* <Footer/> */}
    </div>
  );
}
