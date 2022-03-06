import "../../App.css";
import HeroSection from "../HeroSection";
import { FC, Fragment } from "react";
import Cards from "../Cards";
import Footer from "../Footer";

const Home: FC = () => {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer/>
    </Fragment>
  )
}

export default Home