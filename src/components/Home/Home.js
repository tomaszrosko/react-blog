import './Home.scss'

import FirstSection from '../FirstSlide/FirstSlide.js'
import AboutMe from "../AboutMe/AboutMe";
import SectionEntries from "../Entries/Entries";

function Home() {
  return (
    <>
      <FirstSection />
     <SectionEntries />
      <AboutMe />
    </>
  );
}

export default Home;
