import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Svgcomponent';
import {ButtonContainer} from './Button';
import styled from 'styled-components'



export default class NavBar extends React.Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-exmpand-sm nabbar-dark px-sm-5">
        <Link to="/">
          <Logo className="navbar-logo" width={150} height={50} alt="logo" />,
        </Link>
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5 ">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/Card" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-arrow-down" />
            </span>
            My shoping list
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}


const NavWrapper= styled.nav`
  background-color: var(--mainBlue);
  .nav-link{
    color:var(--green)!important ;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

`