import LinkedinIcon from "@/assets/icons/linkedin.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import GithubIcon from "@/assets/icons/github.svg";

/**
 * This is a Footer component.
 */
export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 border-t border-t-slate-300 p-10">
      <div className="flex w-full justify-center gap-5">
        <a href="https://www.linkedin.com/in/sonya-castro/" target="_blank">
          <img src={LinkedinIcon} alt="linkedin icon" width={30} />
        </a>

        <a href="https://x.com/sonyac_dev" target="_blank">
          <img src={TwitterIcon} alt="twitter icon" width={30} />
        </a>

        <a href="https://github.com/Sonya-c" target="_blank">
          <img src={GithubIcon} alt="github icon" width={30} />
        </a>
      </div>
      <div>
        <p className="text-center text-sm">
          © Sonya Castro 2021 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
