import Image from "next/image";
import Particles from "../animate-bg/Particles";
import AnimatedContent from "../animate-content/AnimatedContent";
import BlurText from "../animate-text/BlurText";
import SplitText from "../animate-text/SplitText";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center pointer-events-auto">
          <SplitText
            text="Hi, I'm Thanh Trung Truong"
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            delay={50}
            duration={1}
            splitType="words, chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-50px"
            tag="h1"
          />

          <div className="mb-8">
            <BlurText
              text="I'm a Software Engineer."
              className="text-2xl md:text-3xl font-semibold mb-4 justify-center"
              delay={150}
              animateBy="words"
              direction="top"
              threshold={0.1}
              rootMargin="-100px"
            />
            <p className="text-base md:text-lg mb-4 text-white/80 max-w-2xl mx-auto">
              I leverage AI development tools to enhance productivity and code
              quality
            </p>
            <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              Proficient in using Cursor, Windsurf, and GitHub Copilot to
              accelerate development workflows and deliver high-quality
              solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
                <Image
                  src="https://avatars.githubusercontent.com/u/126759922?v=4"
                  alt="Cursor"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                Cursor
              </span>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
                <Image
                  src="https://windsurf.com/favicon.svg"
                  alt="Windsurf"
                  width={20}
                  height={20}
                  className=""
                />
                Windsurf
              </span>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.2}
              animateOnMount={true}
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ171TqGq21JDajxZwUYBqX9m8zN7SZsMVew&s"
                  alt="GitHub Copilot"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                GitHub Copilot
              </span>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}
