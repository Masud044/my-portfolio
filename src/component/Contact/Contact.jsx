import {
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div name="Contact" className=" mt-20">
      <h1 className="text-white text-center text-4xl font-medium">
        Contact{" "}
        <span className="text-cyan-400 text-center text-4xl font-medium">
          Me
        </span>{" "}
      </h1>

      <div className="flex mt-10  items-center justify-between">
        <div className="">
          <div className="flex gap-3 mb-4 md:justify-start justify-center items-center">
            <FaPhoneAlt className="h-6 w-6 text-cyan-400 border-2 border-solid rounded-full border-cyan-500 "></FaPhoneAlt>
            <div>
              <p className="text-white text-2xl font-medium">Phone</p>
              <p className="text-white font-medium">+88801774528132</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4  md:justify-start justify-center items-center">
            <MdEmail className="h-6 w-6 text-cyan-400 border-2 border-solid rounded-full border-cyan-500 "></MdEmail>
            <div>
              <p className="text-white text-2xl font-medium">Email</p>
              <a href="/" className="text-white hover:text-red-600 font-medium hover:underline">masudmia0701@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-3 md:justify-start justify-center items-center">
            <FaLocationArrow className="h-6 w-6 text-cyan-400 border-2 border-solid rounded-full border-cyan-500 "></FaLocationArrow>
            <div>
              <p>Location</p>
              <p>00r848</p>
            </div>
          </div>
          <div className="flex gap-5 mt-12 md:justify-start justify-center items-center">
          <FaLinkedin className="h-6 w-6 text-cyan-400  "></FaLinkedin>
          <FaGithub className="h-6 w-6 text-cyan-400 "></FaGithub>

          <FaFacebook className="h-6 w-6 text-cyan-400 "></FaFacebook>
          </div>
         
        </div>
        <div className="bg-red-400">
          <p>
            Lorem ipsum dolor, sit amet blanditiis quae. Inventore, impedit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
