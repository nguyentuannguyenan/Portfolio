import { useRef } from "react";
import Lanyard from '../components/Lanyard/Lanyard.jsx';
import RotatingText from '../components/RotatingText/RotatingText.jsx';
import GradientText from '../components/GradientText/GradientText.jsx';
import BlurText from '../components/BlurText/BlurText.jsx';
import Galaxy from '../components/Galaxy/Galaxy.jsx';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden mt-10 rounded-3xl relative border">
          <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={false}
          density={5}
          glowIntensity={0.3}
          saturation={0.1}
          hueShift={240}/>
          </div>
          <div className="container mx-10 h-screen">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="flex items-center h-full">
                  <div className="flex flex-col gap-6">

                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl text-white font-bold z-10">I'm Ready For Jobs</h1>
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

                    
                    <BlurText
                      text="I was born and raised in Vietnam. I am currently living and studying in the Netherlands. I have some experience working for real clients from projects at school as well as from tech companies and traineeship. I specialize in Full Stack Development, analyzing systems and databases to create user-friendly interfaces and applications. Besides, I am also a freelance frontend developer so let's connect and work with me! :)"
                      delay={50}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="text-xl mb-8"
                    />
                    

                  </div>
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
