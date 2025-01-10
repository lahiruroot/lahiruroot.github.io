import About from "./components/Aboutme";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";


export default function Home() {
  return (
    <>
     <Profile/>
     <About/>
     <Experience/>
     <Certifications/>
     <Technologies/>
    </>
  )
}

