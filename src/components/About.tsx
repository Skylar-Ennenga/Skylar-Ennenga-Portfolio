
import skylar from '../assets/Skylar.jpg'

const About = () => {
  return (
<div className="bg-gray-700 py-16 ml-16">
  <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    {/* Avatar/Illustration */}
    <div className="w-full md:w-1/3 justify-center hidden md:block">
      <img
        src={skylar}
        alt="Avatar"
        className="w-48 h-48 rounded-full shadow-lg"
      />
    </div>

    {/* About Content */}
    <div className="w-full md:w-2/3 pl-0 md:pl-8 mt-8 md:mt-0">
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Frontend Developer</h3>
        <p className="text-gray-300">
          I'm a front-end developer with experience in building responsive and optimized sites.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Backend Developer</h3>
        <p className="text-gray-300">
          I have experience developing fast and optimized back-end systems and APIs utilizing Flask, Python, and SQL.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Cybersecurity</h3>
        <p className="text-gray-300">
          I have a background in network engineering and cybersecurity, holding many certifications in the field. (Click the certs below to see more.)
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default About
