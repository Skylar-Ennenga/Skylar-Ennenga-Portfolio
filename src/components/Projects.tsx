
import ecom from "../assets/EcomSITE.png"

const Projects = () => {
  return (
    <div id="projects" className=" ml-16 py-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>

        <div className="flex justify-center items-center gap-8">
          {/* First Project Card */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 pb-4">
            <img className="w-full" src={ecom} alt="Project Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">My Awesome Project</div>
              <p className="text-white text-base">
              This project is a fully responsive web application built with React, utilizing Redux and Bootstrap for state management and styling. It features user authentication through Auth0 and is connected to a Flask REST API that I developed. The front end and API code are available in the repository for review.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <a href="https://front-end-spec-advanved-react-ecommerce-web-app-type-script.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                View Live
              </a>
              <a href="https://github.com/Skylar-Ennenga/FrontEndSpec-Advanved-React-Ecommerce-WebApp-TypeScript.git" target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-green-400 font-bold py-2 px-4 rounded">
                View Code
              </a>
            </div>
          </div>
{/* 
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 pb-4">
            <img className="w-full" src={ecom} alt="Project Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">My Awesome Project</div>
              <p className="text-white text-base">
                This project is a fully responsive web application that allows users to manage tasks and track their progress. Built using React, Node.js, and Tailwind CSS.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <a href="https://front-end-spec-advanved-react-ecommerce-web-app-type-script.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                View Live
              </a>
              <a href="https://github.com/Skylar-Ennenga/FrontEndSpec-Advanved-React-Ecommerce-WebApp-TypeScript.git" target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-green-400 font-bold py-2 px-4 rounded">
                View Code
              </a>
            </div>
          </div> */}

        </div>
        
      </div>
    </div>


  )
}

export default Projects
