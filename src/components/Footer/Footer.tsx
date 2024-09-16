import LinkedinIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import GithubIcon from '@/assets/icons/github.svg';

/**
 * This is a Footer component. 
 */
export const Footer = () => {
  return (
    <div className='p-10 flex flex-col gap-5 border-t border-t-slate-300'>
      <div className="flex gap-5 justify-center w-full ">
        <a href="https://www.linkedin.com/in/sonya-castro/" target="_blank">
          <img src={LinkedinIcon} alt="linkedin icon" width={30}/>
        </a>
        
        <a href="https://x.com/sonyac_dev" target="_blank">
          <img src={TwitterIcon} alt="twitter icon" width={30} />
        </a>
        
        <a href="https://github.com/Sonya-c" target="_blank">
          <img src={GithubIcon} alt="github icon" width={30} />
        </a>
      </div>
      <div>
        <p className="text-center text-sm font-semibold text-gray-400">
          © Sonya Castro 2021 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;