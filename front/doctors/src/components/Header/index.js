import React from 'react';
import FacebookIcon  from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { HeaderWrapper, Logo } from './styles';

const Header = () => {
    return(
        <HeaderWrapper>
            <Logo src={require("../../img/doctor-logo.png")} alt="Logo"/>
            <div>
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>
        </HeaderWrapper>
    )
}

export default Header;