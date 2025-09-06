import { useRef } from "react";
import Lanyard from '../components/Lanyard/Lanyard.jsx';
import RotatingText from '../components/RotatingText/RotatingText.jsx';
import GradientText from '../components/GradientText/GradientText.jsx';
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden bg-[#19222D]">
          <div className="container border mx-auto h-screen">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl text-white font-bold">I'm Ready For Jobs</h1>
                  <RotatingText
                    texts={['Web Design', 'Web Developement', 'Full Stack Programming', 'DevOps', 'Data Management']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <GradientText
                    colors={["#BCC6CC", "#999B9B", "#C0C0C0", "#999B9B", "#BCC6CC"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class font-bold text-6xl text-start"
                  >
                    I'm Andre Nguyen
                  </GradientText>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class font-bold text-4xl text-start"
                  >
                    Full Stack Developer
                  </GradientText>
                </div>

              </div>
              <div className="col-span-6">
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default About;
