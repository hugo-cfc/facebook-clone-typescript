import React from 'react';

import Input from '../Input/index';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebookCircle.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/homeIcon.svg';
import { ReactComponent as VideoIcon } from '../../assets/icons/videosIcon.svg';
import { ReactComponent as MarketIcon } from '../../assets/icons/marketIcon.svg';
import { ReactComponent as GroupsIcon } from '../../assets/icons/groupsIcon.svg';
import { ReactComponent as GamingIcon } from '../../assets/icons/gamingIcon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';
import { ReactComponent as MessengerIcon } from '../../assets/icons/messengerIcon.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notificationIcon.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowIcon.svg';

import ProfileImage from '../../assets/images/perfil.png';

import {
  Container,
  SearchContainer,
  NavContainer,
  NavLink,
  OptionsContainer,
} from './style';
import { Menu } from './Components/Menu';

interface HeaderProps {
  activeTab?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, ...rest }) => {
  return (
    <Container {...rest}>
      <SearchContainer>
        <FacebookIcon />
        <Input id="input-container" placeholder="Pesquisar no Facebook" />
      </SearchContainer>
      <NavContainer>
        <ul>
          <li>
            <NavLink to="/" active={activeTab === 'home'}>
              <div>
                <HomeIcon />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" active={activeTab === 'videos'}>
              <div>
                <VideoIcon />
                <span>9+</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" active={activeTab === 'market'}>
              <div>
                <MarketIcon />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" active={activeTab === 'groups'}>
              <div>
                <GroupsIcon />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" active={activeTab === 'gaming'}>
              <div>
                <GamingIcon />
                <span>9+</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </NavContainer>
      <OptionsContainer>
        <div id="user-details">
          <img src={ProfileImage} alt="Hugo" />
          Hugo
        </div>
        <div id="container-options-buttons">
          <button>
            <MenuIcon />
          </button>
          <Menu />
          <button>
            <MessengerIcon />
          </button>
          <button>
            <NotificationIcon />
          </button>
          <button>
            <ArrowIcon />
          </button>
        </div>
      </OptionsContainer>
    </Container>
  );
};

export default Header;
