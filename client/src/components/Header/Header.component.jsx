import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderStyle from './styles';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cartIcon/cartIcon.component.jsx';
import CartListStyle from '../cart/cartList.component.jsx';

const Header = ({ currentUser, hidden }) => (
  <HeaderStyle>
    <Link className="logo" to="/">
      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="40px" height="40px"><path d="M 40 5.820313 L 7 26.445313 L 7 35.804688 L 8.53125 34.847656 L 9 34.550781 L 9 71 L 71 71 L 71 34.554688 L 73 35.804688 L 73 26.445313 Z M 40 8.179688 L 71 27.554688 L 71 32.199219 L 40 12.820313 L 9 32.199219 L 9 27.554688 Z M 40 15.179688 L 69 33.304688 L 69 62 C 68.449219 62 68 62.449219 68 63 C 68 63.550781 68.449219 64 69 64 L 69 69 L 49 69 L 49 64 C 49.550781 64 50 63.550781 50 63 C 50 62.449219 49.550781 62 49 62 L 49 44 L 31 44 L 31 62 C 30.449219 62 30 62.449219 30 63 C 30 63.550781 30.449219 64 31 64 L 31 69 L 11 69 L 11 64 C 11.550781 64 12 63.550781 12 63 C 12 62.449219 11.550781 62 11 62 L 11 33.300781 Z M 31 25 L 31 37 L 49 37 L 49 25 Z M 33 27 L 39 27 L 39 35 L 33 35 Z M 41 27 L 47 27 L 47 35 L 41 35 Z M 33 46 L 47 46 L 47 69 L 33 69 Z M 43.5 57 C 42.671875 57 42 57.671875 42 58.5 C 42 59.328125 42.671875 60 43.5 60 C 44.328125 60 45 59.328125 45 58.5 C 45 57.671875 44.328125 57 43.5 57 Z M 15 62 C 14.449219 62 14 62.449219 14 63 C 14 63.550781 14.449219 64 15 64 C 15.550781 64 16 63.550781 16 63 C 16 62.449219 15.550781 62 15 62 Z M 19 62 C 18.449219 62 18 62.449219 18 63 C 18 63.550781 18.449219 64 19 64 C 19.550781 64 20 63.550781 20 63 C 20 62.449219 19.550781 62 19 62 Z M 23 62 C 22.449219 62 22 62.449219 22 63 C 22 63.550781 22.449219 64 23 64 C 23.550781 64 24 63.550781 24 63 C 24 62.449219 23.550781 62 23 62 Z M 27 62 C 26.449219 62 26 62.449219 26 63 C 26 63.550781 26.449219 64 27 64 C 27.550781 64 28 63.550781 28 63 C 28 62.449219 27.550781 62 27 62 Z M 53 62 C 52.449219 62 52 62.449219 52 63 C 52 63.550781 52.449219 64 53 64 C 53.550781 64 54 63.550781 54 63 C 54 62.449219 53.550781 62 53 62 Z M 57 62 C 56.449219 62 56 62.449219 56 63 C 56 63.550781 56.449219 64 57 64 C 57.550781 64 58 63.550781 58 63 C 58 62.449219 57.550781 62 57 62 Z M 61 62 C 60.449219 62 60 62.449219 60 63 C 60 63.550781 60.449219 64 61 64 C 61.550781 64 62 63.550781 62 63 C 62 62.449219 61.550781 62 61 62 Z M 65 62 C 64.449219 62 64 62.449219 64 63 C 64 63.550781 64.449219 64 65 64 C 65.550781 64 66 63.550781 66 63 C 66 62.449219 65.550781 62 65 62 Z"/></svg>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { hidden ? null : <CartListStyle /> }
  </HeaderStyle>
);

// state = rootreduer get from reducer to (map state to props)
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
