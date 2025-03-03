import { RevealOnScroll } from "../components/RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      // style={{ backgroundImage: "url('/home-bg.jpg')" }}
    >
     
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-4">
          <div className="text-center md:text-left md:w-1/2 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi Visitor! I am kimmmm
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="/home-img.png"
              alt="Home"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};