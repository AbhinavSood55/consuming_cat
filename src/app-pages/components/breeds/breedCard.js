import { StyledBreedCard } from '../styled-components/styledComponents'
import { Link } from 'react-router-dom'
import defImage from './media/default_cat.png'

const BreedCard = (props) => {

    const imageClicked = (e) => {
        const overlayContainer = document.createElement('DIV')
        overlayContainer.classList.add('OverlayContainer')
        const overlayImage = document.createElement('DIV')
        overlayImage.style.backgroundImage = 'url(' + e.target.src+ ')'
        const rootElement = document.getElementsByTagName('body')
        overlayImage.classList.add('OverlayImage')
        overlayContainer.appendChild(overlayImage)
        rootElement[0].appendChild(overlayContainer)
        overlayImage.addEventListener('click', (e) =>{
            e.preventDefault()
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        })
    }

    return(
        <StyledBreedCard className='breedCard' url={ (props.breed.image ? props.breed.image.url : defImage) }>
            <section className='Image'>
                <img alt='cardImage' onClick={imageClicked} src={ (props.breed.image ? props.breed.image.url : defImage) }></img>
            </section>
            <section className='card-body'>
                    <Link className='button'
                        to={{
                            pathname: '/breed/',
                            state:{
                                breedId: props.breed.id
                            }
                        }}>
                        <h1>{props.breed.name}</h1>
                        <section className='cat-details'>
                            <p><strong>Comes from: </strong><span>{props.breed.origin}</span></p>
                            <p><strong>Temperament: </strong> 
                            <span>{props.breed.temperament}</span></p>
                        </section>
                    </Link>
            </section>
        </StyledBreedCard>
    )
}

export default BreedCard;