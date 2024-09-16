import PlaningIcon from '@/assets/icons/planing.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import { useState } from 'react';

/**
 * This is a Header component. 
 */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 72;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window?.scrollTo({
      behavior: 'smooth',
      top: offsetPosition,
     });
  }

  return (
    <div className='flex py-3 justify-center sticky top-0 z-50 bg-white shadow-sm'>
      <div className='flex p-3 md:flex-row justify-between max-w-screen-lg flex-1'>
        <div className='flex items-center gap-3'>
          <img src={PlaningIcon} alt="" width={20} />
          <p className='font-semibold'>Strategic planing</p>
        </div>

        <div className="sm:hidden flex">
          <button
            aria-label='open menu'
            className={isOpen ? 'rotate-90' : ''}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={MenuIcon} alt="Menu" width={20} />
          </button>
        </div>

        <div className={(isOpen ? 'flex absolute top-24 right-3 bg-white p-10 border-slate-300 border  rounded shadow-lg' : 'hidden') + ' sm:flex flex-col sm:flex-row gap-3'}>
          <button
            className='hover:text-blue-600'
            onClick={() => scrollTo("introduction")}
          >Introduction</button>

          <button
            className='hover:text-blue-600'
            onClick={() => scrollTo("diagnostic")
          }>Diagnostic</button>
          
          <button
            className='hover:text-blue-600'
            onClick={() => scrollTo("identity")}
          >Identity</button>
          
          <button
            className='hover:text-blue-600'
            onClick={() => scrollTo("objectives")}
          >Objectives</button>
        </div>
      </div>
    </div>
  );
};

export default Header;