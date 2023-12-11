import './Home.scss'

import FirstSection from '../FirstSlide/FirstSlide.js'
import Data from "../Data/Data";
import SectionEntries from "../Entries/Entries";

function Home() {
  return (
    <>
      <FirstSection />
     <SectionEntries />
      <Data />
    </>
  );
}

export default Home;
