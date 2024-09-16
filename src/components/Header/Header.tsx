import PlaningIcon from '@/assets/icons/planing.svg';

/**
 * This is a Header component. 
 */
export const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='flex items-center gap-3'>
        <img src={PlaningIcon} alt="" width={20} />
        <p className='font-semibold'>Strategic planing</p>
      </div>

      <div className='flex flex-col md:flex-row gap-3'>
        <a className='hover:text-blue-600' href="">Diagnostic</a>
        <a className='hover:text-blue-600' href="">Identity</a>
        <a className='hover:text-blue-600' href="">Objectives</a>
      </div>
    </div>
  );
};

export default Header;