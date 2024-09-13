import img from "../assets/logo_converted.jpg";
import resume from "../assets/Skylar Ennenga Resume.pdf";

const Hero = () => {
  return (
    <div className="ml-16 flex-1 flex items-center justify-center bg-gray-700 py-16">
      <div className="absolute top-4 right-4">
        <a
          href={resume}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition duration-300"
        >
          Resume
        </a>
      </div>
      <div className="text-center p-8">
        <div className="mb-8 mt-6">
          <img
            src={img}
            alt="Skylar Ennenga"
            className="w-48 h-48 rounded-full mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-8">Skylar Ennenga</h1>
        <p className="text-xl text-gray-300">Welcome to My Portfolio</p>
        <p className="text-gray-400 mt-4">
          I’m a former network engineer with an extensive background in network
          operations and deployable communications, now transitioning into
          front-end development after completing the Coding Temple bootcamp.
          With a solid technical foundation and a passion for crafting intuitive
          web experiences, I’m excited to build a career in the front-end
          development space. Explore my work and learn more about my journey!
        </p>
        <div className="mt-8">
          <a
            href="https://github.com/Skylar-Ennenga"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition duration-300"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
