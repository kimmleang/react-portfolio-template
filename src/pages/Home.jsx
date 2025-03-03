import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";
import { ParticlesBackground } from "../components/ParticlesBackground";

export const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-black mt-18 p-10">
      <ParticlesBackground />
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 relative z-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi Visitor!<br /> I'm Kimleang
            </h1>
            <br />
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              <Typewriter
                words={["Full-Stack Developer", "Software Engineer", "Freelancer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="flex justify-center">
            <img 
              src="/profile.png" 
              alt="Home" 
              className="w-48 h-48 md:w-100 md:h-100 rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>
        </div>
        <br /><br /><br />

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center mt-20">
          Self<span className="text-blue-400"> Introduction</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              I am a <span className="italic text-blue-300">software developer</span>, who is passionate about building web applications and mobile applications. I have experience in building 
              web applications using React js, and Laravel. I also have experience in building mobile applications using Flutter. 
              I am always looking for new opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/home-img.png" alt="Introduce" className="w-full max-w-sm rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-4 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Find Me On <span className="text-blue-400">Other Platforms</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl text-center">
            Feel free to <span className="text-blue-300">connect</span> with me on different social media platforms!
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/kimmleang" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://t.me/kimm_leang" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/in/john-kimleang-33382629a/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://web.facebook.com/leang.bros.73" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
              <FaFacebook />
            </a>
          </div>
        </div>

      </RevealOnScroll>
    </section>
  );
};