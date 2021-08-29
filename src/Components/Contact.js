import { ReactComponent as YouTube } from "../Assets/SocialMedia/YouTube.svg";
import { ReactComponent as Behance } from "../Assets/SocialMedia/Behance.svg";
import { ReactComponent as Facebook } from "../Assets/SocialMedia/Facebook.svg";
import { ReactComponent as Github } from "../Assets/SocialMedia/Github.svg";
import { ReactComponent as Instagram } from "../Assets/SocialMedia/Instagram.svg";
import { ReactComponent as LinkedIn } from "../Assets/SocialMedia/Linkedin.svg";
import { ReactComponent as Medium } from "../Assets/SocialMedia/Medium.svg";
import { ReactComponent as Twitter } from "../Assets/SocialMedia/Twitter.svg";

const Contact = () => {
  return (
    <div className="mt-10 px-10 py-12 text-center font-sora bg-white">
      <div className="text-xl  font-bold py-1 border-b-2 border-jams_blue w-36 mx-auto">
        Contact Us
      </div>
      <ul className="grid sm:grid-cols-2 py-10 gap-6 lg:px-40 xl:px-60">
        <li className="grid">
          <div className="font-bold sm:text-lg">Riddhi Gupta</div>
          <a
            className="text-xs sm:text-sm hover:text-jams_blue"
            href="mailto:mailriddhigupta@gmail.com"
          >
            mailriddhigupta@gmail.com
          </a>
          <span className="text-xs sm:text-sm">+91 9408955501</span>
        </li>
        <li className="grid">
          <div className="font-bold sm:text-lg">Shubham Srivastava</div>
          <a
            className="text-xs sm:text-sm hover:text-jams_blue"
            href="mailto:shubhamsriv99@outlook.com"
          >
            shubhamsriv99@outlook.com
          </a>
          <span className="text-xs sm:text-sm">+91 9818891967</span>
        </li>
      </ul>
      <div className="font-bold text-xl py-1 border-b-2 border-jams_blue w-36 mx-auto">
        Social Media
      </div>
      <div className="py-4">
        <div className="grid grid-cols-4 w-56 gap-5 py-5 mx-auto">
          <a
            href="https://facebook.com/gdscvitvellore"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="fill-current hover:text-jams_blue" />
          </a>
          <a href="https://github.com/GDGVIT" target="_blank" rel="noreferrer">
            <Github className="fill-current hover:text-jams_blue" />
          </a>
          <a
            href="https://www.linkedin.com/company/dscvit"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="fill-current hover:text-jams_blue" />
          </a>
          <a href="https://medium.com/gdg-vit" target="_blank" rel="noreferrer">
            <Medium className="fill-current hover:text-jams_blue" />
          </a>
        </div>
        <div className="grid grid-cols-3 place-items-center w-44 mx-auto">
          <a
            href="https://www.youtube.com/channel/UCvT-ZJF7fXHJi9kDeCPR-zg"
            target="_blank"
            rel="noreferrer"
          >
            <YouTube className="fill-current hover:text-jams_blue" />
          </a>
          <a
            href="https://twitter.com/gdscvit"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="fill-current hover:text-jams_blue" />
          </a>
          <a
            href="https://instagram.com/gdscvitvellore"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="fill-current hover:text-jams_blue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
