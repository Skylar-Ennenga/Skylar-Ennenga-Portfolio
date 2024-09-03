import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_8kykrmc', 'template_f529md5', e.currentTarget, 
            'kFpuiEZaY_wbvtEJP')
      .then((result) => {
        console.log(result.text);
        setFormStatus('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setFormStatus('Failed to send message, please try again.');
      });
    e.currentTarget.reset();
  };

  return (
<div id="projects" className=" ml-16 py-16">
<div className="max-w-lg mx-auto bg-gray-800 shadow-lg rounded-lg p-8 my-10 ">
  <h2 className="text-2xl font-bold text-white text-center mb-4 bg-gray-800">Contact Me</h2>
  {formStatus && <p className="text-center text-green-500 mb-4">{formStatus}</p>}
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white"
        placeholder="Your Name"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white"
        placeholder="Your Email"
      />
    </div>
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
      <input
        type="text"
        name="subject"
        id="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white"
        placeholder="Subject"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white"
        placeholder="Your Message"
        rows={4}
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Send
      </button>
    </div>
  </form>
</div>
</div>

  );
};

export default ContactForm;

