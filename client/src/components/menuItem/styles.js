import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  height: 30px;
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  h1 {
      font-weight: bold;
      font-size: 20px;
      color: #4a4a4a;
  }
  span {
      font-weight: lighter;
      font-size: 16px;
  }
`;


export const MenuItemStyle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  border-style: none;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  height: 580px;
  width: 25%;

  @media only screen and (max-width: 1200px) {
    width: 400px;
  }

  @media only screen and (max-width: 800px) {
    width: 500px;
  }

  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

`;

export default MenuItemStyle;
