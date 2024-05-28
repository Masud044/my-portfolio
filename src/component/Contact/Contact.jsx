import {
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_or8yipe', 'template_pwm4rr1', form.current, {
        publicKey: 'z8mNPGrgIkYY72pFN',
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div name="Contact" className=" mt-20">
      <h1 className="text-white text-center text-4xl font-medium">
        Contact{" "}
        <span className="text-cyan-400 text-center text-4xl font-medium">
          Me
        </span>{" "}
      </h1>

      <div className="md:flex mt-10  items-center justify-between">
        <div className="mb-12">
          <div className="flex gap-3 mb-4 md:justify-start items-center px-5 md:px-0 ">
            <FaPhoneAlt className="h-6 w-6 text-cyan-400 border-2 border-solid  rounded-full border-cyan-500 "></FaPhoneAlt>
            <div>
              <p className="text-white text-2xl font-medium">Phone</p>
              <p className="text-white font-medium">+88801774528132</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4 px-5 md:px-0  md:justify-start items-center ">
            <MdEmail className="h-6 w-6 text-cyan-400 border-2 border-solid rounded-full border-cyan-500"></MdEmail>
            <div className="">
              <p className="text-white text-2xl font-medium">Email</p>
              <a
                href="/"
                className="text-white hover:text-red-600 font-medium hover:underline"
              >
                masudmia0701@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 md:justify-start px-5 md:px-0  items-center">
            <FaLocationArrow className="h-6 w-6 text-cyan-400 border-solid border-2 rounded-full border-cyan-500 "></FaLocationArrow>
            <div>
              <p className="text-white text-2xl font-medium">Location</p>
              <p className="text-white font-medium">Rangpur,Bangladash</p>
            </div>
          </div>
          <div className="flex gap-5 mt-12 md:justify-start items-center px-5 md:px-0">
            <a href="/">
              <FaLinkedin className="h-8 w-8 text-cyan-400  "></FaLinkedin>
            </a>

            <a href="/">
              <FaGithub className="h-8 w-8 text-cyan-400 "></FaGithub>
            </a>

            <a href="/">
              <FaFacebook className="h-8 w-8 text-cyan-400 "></FaFacebook>
            </a>
          </div>
        </div>
        <div className="">

          <form ref={form} onSubmit={sendEmail} className="px-5 md:px-0">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              autoComplete="name"
              required
              className="block text-white ring-1 bg-violet-950 w-full   ring-gray-400  focus:ring-1  focus:ring-cyan-400 focus:outline-none rounded-lg  p-3 mb-4"
            />
            <input
              type="Email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
              className=" text-white ring-1 bg-violet-950 w-full   ring-gray-400  focus:ring-1  focus:ring-cyan-400 focus:outline-none rounded-lg mb-4 p-3"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              autoComplete="subject"
              required
              className=" text-white ring-1 bg-violet-950 w-full mb-4  ring-gray-400  focus:ring-1  focus:ring-cyan-400 focus:outline-none rounded-lg  p-3"
            />
            <textarea
              name="message"
              id="name"
              className=" text-white ring-1 bg-violet-950 w-full   ring-gray-400  focus:ring-1  focus:ring-cyan-400 focus:outline-none rounded-lg  p-3 py-5"
              placeholder="Message" autoComplete="message"
              required
            ></textarea>
             <input className="rounded-full font-medium text-white border-2 border-cyan-400 py-2 mt-4 px-5 hover:bg-cyan-400" type="submit" value="Send Message" />
             {/* <button className="rounded-full font-medium text-white border-2 border-cyan-400 py-2 mt-4 px-5 hover:bg-cyan-400">Send Message</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
