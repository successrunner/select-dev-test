import { Button } from '../ui/button';
import Logo from '@/assets/icons/logo.svg';
import NavbarMenu from './menu';

const Navbar = () => {
  return (
    <header className="mx-[84px] mt-4 flex items-center justify-between rounded-[14px] border border-border-navbar px-4 py-3 backdrop-blur-lg">
      <Logo />
      <NavbarMenu />
      <div className="flex items-center gap-5">
        <Button size="sm" variant="ghost">
          Log in
        </Button>
        <Button size="sm">Book a Demo</Button>
      </div>
    </header>
  );
};

export default Navbar;
