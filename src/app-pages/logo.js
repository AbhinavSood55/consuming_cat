import {Link} from 'react-router-dom';
import { StyledLogo } from './components/styled-components/styledComponents';

const Logo = () => {
    return(
        <>
            <Link to='/home/'>
                <StyledLogo>
                    <h1>K..KAT</h1>
                </StyledLogo>
            </Link>
        </>
    )
}

export default Logo;