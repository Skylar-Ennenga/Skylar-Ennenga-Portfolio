
import CASP from "../assets/CASP+ ce Certified.png";
import CCNA from "../assets/ccna_sm.jpg";
import CASPCERT from "../assets/Certifications/CASP-Cert.jpg";
import CCNACERT from "../assets/Certifications/Ccna-Cert.jpg";
import AWS from "../assets/Certifications/AWS-Cert.jpg";
import GOOGLE from "../assets/Certifications/Google Cyber.png";
import LINUX from "../assets/Certifications/Linux-Cert.jpg";
import htmlImage from "../assets/Skills/html-5.182x256.png";
import cssImage from "../assets/Skills/css-3.182x256.png";
import jsImage from "../assets/Skills/javascript-js.256x256.png";
import reactImage from "../assets/Skills/react.256x228.png";
import tailwindImage from "../assets/Skills/tailwind-css.256x154.png";
import flaskImage from "../assets/Skills/flask.256x229.png";
import sqlImage from "../assets/Skills/sql-database-generic.190x256.png";
import pythonImage from "../assets/Skills/python.256x254.png";
import awsImage from "../assets/Skills/aws.256x153.png";
import googleImage from "../assets/Skills/google.256x84.png";
import linuxImage from "../assets/Skills/linux-tux.222x256.png";
import tsImage from "../assets/Skills/typescript-icon.256x256.png";
import { useState } from "react";


const Skills = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
<div id="skills" className="text-white ml-16">
  <div className="max-w-5xl mx-auto px-8 pb-8">
    <h2 className="text-4xl font-bold text-center mb-8">Skills & Certifications</h2>

    {/* Front-End Skills */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-8 ">Front-End Development</h3>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="text-center flex-grow">
          <img src={htmlImage} alt="HTML5" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">HTML5</p>
        </div>
        <div className="text-center flex-grow">
          <img src={cssImage} alt="CSS3" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">CSS3</p>
        </div>
        <div className="text-center flex-grow">
          <img src={jsImage} alt="JavaScript" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="text-center flex-grow">
          <img src={tsImage} alt="TypeSript" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="text-center flex-grow">
          <img src={reactImage} alt="React" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">React</p>
        </div>
        <div className="text-center flex-grow">
          <img src={tailwindImage} alt="Tailwind" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">Tailwind</p>
        </div>
      </div>
    </div>

    {/* Back-End Skills */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-8 ">Back-End Development</h3>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="text-center flex-grow">
          <img src={flaskImage} alt="Flask" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">Flask</p>
        </div>
        <div className="text-center flex-grow">
          <img src={sqlImage} alt="SQL" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">SQL</p>
        </div>
        <div className="text-center flex-grow">
          <img src={pythonImage} alt="Python" className="h-20 w-20 mx-auto object-contain" />
          <p className="mt-2">Python</p>
        </div>
      </div>
    </div>

    {/* Cybersecurity Certifications */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-8">Cybersecurity Certifications</h3>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="text-center flex-grow cursor-pointer" onClick={() => openModal(CASPCERT, 'CASP+ Certification')}>
          <img src={CASP} alt="CASP+" className="h-20 w-20 mx-auto object-contain rounded-full shadow-lg bg-gray-800" />
          <p className="mt-2">CASP+</p>
        </div>
        <div className="text-center flex-grow cursor-pointer" onClick={() => openModal(CCNACERT, 'CCNA Certification')}>
          <img src={CCNA} alt="CCNA" className="h-20 w-20 mx-auto object-contain rounded-full shadow-lg" />
          <p className="mt-2">CCNA</p>
        </div>
        <div className="text-center flex-grow cursor-pointer" onClick={() => openModal(LINUX, 'Linux Certification')}>
          <img src={linuxImage} alt="Linux" className="h-20 w-20 mx-auto object-contain " />
          <p className="mt-2">Linux</p>
        </div>
        <div className="text-center flex-grow cursor-pointer" onClick={() => openModal(GOOGLE, 'Google Cybersecurity Certification')}>
          <img src={googleImage} alt="Google Cloud" className="h-20 w-20 mx-auto object-contain " />
          <p className="mt-2">Google Cloud</p>
        </div>
        <div className="text-center flex-grow cursor-pointer" onClick={() => openModal(AWS, 'AWS Certification')}>
          <img src={awsImage} alt="AWS" className="h-20 w-20 mx-auto object-contain " />
          <p className="mt-2">AWS</p>
        </div>
      </div>
    </div>
  </div>

  {isModalOpen && (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-400 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2>
        <img src={modalImage} alt={modalTitle} className="w-full h-auto rounded-lg mb-4" />
      </div>
    </div>
  )}
</div>


  );
};

export default Skills
