import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto text-center text-white">
        <p className="mb-4">Connect with Me</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/skylarennenga/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/Skylar-Ennenga" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p className="mt-4 text-gray-400">© 2024 Skylar Ennenga. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer
