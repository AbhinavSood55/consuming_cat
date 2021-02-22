import { useLocation } from 'react-router-dom';
import { StyledBreed } from './components/styled-components/styledComponents'
import { useSelector } from 'react-redux'
import defImage from './components/breeds/media/default_cat.png'

const Breeds = () => {
    const location = useLocation()
    const breed = useSelector(state => state.breeds).find((breed)=>{
        return breed.id === location.state.breedId
    })
    return(
        
        <StyledBreed 
            breedId={location.state.breedId} 
            url={breed.image ? breed.image.url : defImage}>
            
            <section>
                <div className="img"/>
                <h1>{breed.name}</h1>
                <h2>{breed.origin}</h2>
            </section>
            <section className='detailDescription'>
                <p>{breed.description}</p>
            </section>
        </StyledBreed>
    )
}

export default Breeds;