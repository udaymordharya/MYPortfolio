import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar =() => {
    return (
      
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center justify-center">
       <img className="mx w-25 h-25 " src={logo} alt="logo" />
      </div>
    <div className="m-8 flex flex-wrap items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/uday-mordharya-739b782b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
        <FaLinkedin />
        </a>
        <a
          href="https://github.com/udaymordharya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
        <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/udaymordharya_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
        <FaInstagram/>
        </a>
        <a
            href="./UdayMordharya-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            Resume
          </a>
    </div>
    </nav>
    );    

};
export default Navbar;
