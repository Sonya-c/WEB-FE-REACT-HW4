import PlaningIcon from '@/assets/icons/planing.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import { useState } from 'react';

/**
 * This is a Header component. 
 */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='flex py-5 justify-center sticky top-0 z-50 bg-white shadow-sm'>
      <div className='flex p-3 md:p-0 md:flex-row justify-between max-w-screen-lg flex-1'>
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
          <a className='hover:text-blue-600' href="#introduction">Introduction</a>
          <a className='hover:text-blue-600' href="#diagnostic">Diagnostic</a>
          <a className='hover:text-blue-600' href="#identity">Identity</a>
          <a className='hover:text-blue-600' href="#objectives">Objectives</a>
        </div>
      </div>
    </div>
  );
};

export default Header;