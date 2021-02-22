import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { StyledLi,
         StyledUl,
         StyledA,
         StyledBurger,
         StyledNavBarContainer } from './components/styled-components/styledComponents';

const NavBar = () => {
    
    const [showMenu, setShowMenu]= useState(false);

    useEffect(()=> {
        console.log(showMenu)
        const lines = Array.from(document.getElementsByClassName('line'))
        if(showMenu){
            lines.map(line=>line.classList.add('cross'))
        } else {
            lines.map(line=>line.classList.remove('cross'))
        }
    }, [showMenu])

    const menuToggle = () => {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }


    return(
        <StyledNavBarContainer className='navBarContainer'>
            <StyledUl className='navBar' showMenu = {showMenu}>
                <StyledLi>
                    <Link to='/home/' onClick={menuToggle}>
                        <StyledA>
                            Home
                        </StyledA>
                    </Link>
                </StyledLi>
                {/* <StyledLi>
                    <Link to='/votes/' onClick={menuToggle}>
                        <StyledA>
                            Vote
                        </StyledA>
                    </Link>
                </StyledLi> */}
                <StyledLi>
                    <Link to='/image-search/' onClick={menuToggle}>
                        <StyledA>
                            Image Search
                        </StyledA>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link to='/favourites/' onClick={menuToggle}>
                        <StyledA>
                            Favourites
                        </StyledA>
                    </Link>
                </StyledLi>
            </StyledUl>
            <StyledBurger href="#" className='burger' onClick={menuToggle}>
                        <div className='top line'/>
                        <div className='center line'/>
                        <div className='bottom line'/>
            </StyledBurger>
        </StyledNavBarContainer>
    )
}

export default NavBar;