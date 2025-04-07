import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/jatin-tomar/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/jatintomar04" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
