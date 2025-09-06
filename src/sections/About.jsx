import { useRef } from "react";
import Lanyard from '../components/Lanyard/Lanyard.jsx';
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </section>
    
    
  );
};

export default About;
