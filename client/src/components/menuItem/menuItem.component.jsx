import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemStyle, Content, BackgroundImage } from './styles';

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match
}) => (
  <MenuItemStyle className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content>
      <h1>{title.toUpperCase()}</h1>
    </Content>
  </MenuItemStyle>
);

export default withRouter(MenuItem);
