import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/directory.component.jsx';

const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;


const HomePage = () => (
  <HomePageStyle>
    <Directory />
  </HomePageStyle>
);

export default HomePage;
