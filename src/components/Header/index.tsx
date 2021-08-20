import React from 'react';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebookCircle.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchicon.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/homeIcon.svg';
import { ReactComponent as VideoIcon } from '../../assets/icons/videosIcon.svg';
import { ReactComponent as MarketIcon } from '../../assets/icons/marketIcon.svg';
import { ReactComponent as GroupsIcon } from '../../assets/icons/groupsIcon.svg';
import { ReactComponent as GamingIcon } from '../../assets/icons/gamingIcon.svg';

import ProfileImage from '../../assets/images/perfil.png';

import {
  Container,
  SearchContainer,
  NavContainer,
  NavLink,
  OptionsContainer,
} from './style';

interface HeaderProps {
  activeTab?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, ...rest }) => {
  return (
    <Container {...rest}>
      <SearchContainer>
        <FacebookIcon />
        <div id="input-container">
          <SearchIcon />
          <input placeholder="Pesquisar no Facebook" />
        </div>
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
        <div id="containet-options-buttons">
          <button>Mn</button>
          <button>Mg</button>
          <button>Nt</button>
          <button>Dd</button>
        </div>
      </OptionsContainer>
    </Container>
  );
};

export default Header;
