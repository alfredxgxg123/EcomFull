import React from 'react';
import { withRouter } from 'react-router-dom';
import BackgroundImage from './backgroundImage.style';
import Content from './content.style';
import MenuItemStyle from './styles';

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match
}) => (
  <MenuItemStyle className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content>
      <h1>{title.toUpperCase()}</h1>
      <span>SHOP NOW</span>
    </Content>
  </MenuItemStyle>
);

export default withRouter(MenuItem);
