import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const ContainerHeader = styled.div`
  background-color: #363435;
  color: #fff;
`;
export class Header extends React.Component {
  render() {
    return(
      <ContainerHeader>
        <img src={logo} alt="Geru" style={{width: '98px', height: '45px', padding: '1rem 0'}} />
      </ContainerHeader>
    );
  }
}

export default Header;