import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>Магазин</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>Выйти</OptionLink>
                :
                <OptionLink to='/signin'>Войти</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);