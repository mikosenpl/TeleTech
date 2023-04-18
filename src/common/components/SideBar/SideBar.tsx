import { Link, useLocation } from 'react-router-dom';
import {
  LogoImage,
  LogoWrapper,
  MenuNavigationItem,
  MenuNavigationItemActive,
  MenuNavigationItemWrapper,
  MenuWrapper,
  SideBarWrapper,
} from './SideBar.styles';
import Logo from '../../assets/icons/White-logo.png';
import { HOME_PATH } from '../../constants/routes';
import { MenuItems } from '../../constants/menuItems';
import { MenuItem } from '../../models/MenuItem';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isCurrentPath = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <SideBarWrapper>
      <LogoWrapper>
        <Link to={HOME_PATH}>
          <LogoImage src={Logo} alt="teletech logo" />
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <MenuNavigationItemWrapper>
          {MenuItems.map((menuItem: MenuItem) => {
            return (
              <>
                {isCurrentPath(menuItem.path) ? (
                  <MenuNavigationItemActive key={menuItem.path}>
                    <Link to={menuItem.path}>{t(menuItem.text)}</Link>
                  </MenuNavigationItemActive>
                ) : (
                  <MenuNavigationItem key={menuItem.path}>
                    <Link to={menuItem.path}>{t(menuItem.text)}</Link>
                  </MenuNavigationItem>
                )}
              </>
            );
          })}
        </MenuNavigationItemWrapper>
      </MenuWrapper>
    </SideBarWrapper>
  );
};

export default Sidebar;
