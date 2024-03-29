import { Link } from 'react-router-dom';
import logo from '../../../assets/shared/logo.svg';
import useMediaQuery from '../../shared/hooks/UseMediaQuery';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const isAboveMobile = useMediaQuery('(min-width: 768px)');
  return (
    <div className="flex justify-between items-center p-6 md:p-0 lg:py-16">
      <Link to={'/'}>
        <div className="cursor-pointer md:px-12 lg:py-6">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      {isAboveMobile && <DesktopMenu />}
      {!isAboveMobile && <MobileMenu />}
    </div>
  );
};

export default Header;
