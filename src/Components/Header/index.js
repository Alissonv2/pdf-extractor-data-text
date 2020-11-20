import React from 'react';

import { HeaderContainer, Image } from './styles';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <HeaderContainer>
            <Image src={Logo} alt="Logo"/>
        </HeaderContainer>

    );
}

export default Header;