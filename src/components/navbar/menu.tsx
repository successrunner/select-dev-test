import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { NAVBAR_MENU_ITEMS } from './constants';

const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-8">
        {NAVBAR_MENU_ITEMS.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.links ? (
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            ) : (
              <NavigationMenuLink href={item.href} className="text-sm hover:text-primary">
                {item.label}
              </NavigationMenuLink>
            )}
            {item.links && <NavigationMenuContent className="hidden"></NavigationMenuContent>}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMenu;
