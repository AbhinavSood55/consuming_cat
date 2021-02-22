import { useState } from 'react'
import dropDown from './components/breeds/media/down-arrow.png'
import {useSelector} from 'react-redux'
import { StyledImageSearch, 
         StyledSearchFields,
         StyledSearchComponent,
         StyledImageCollection,
         StyledImage,
         StyledButton
          } from './components/styled-components/styledComponents'

const ImageSearch = () => {

    const breeds = useSelector(state => state.breeds)
    const categories= useSelector(state => state.categories)

    const [images, setImages] = useState([])

    const fetchImages = async () => {
        const queryParams = [...document.getElementsByTagName('SELECT')]
        const limit = document.getElementById('limit')
        const myHeaders = new Headers();
        let myUrl = 'https://api.thecatapi.com/v1/images/search?'
        myHeaders.append('x-api-key', '1f6c7c69-a465-4a24-a4d7-403323d9f826')
        
        queryParams.map((select)=>{
            if(select.selectedOptions[0].value!==0 && select.selectedOptions[0].value!==' '){
                myUrl = `${myUrl}${select.id}=${select.selectedOptions[0].value}&`
            }
            return myUrl;
        })

        if(limit.value){
            myUrl = `${myUrl}limit=${limit.value}`
        }
        
        const myRequest = new Request(myUrl,{
            method: 'GET',
            headers: myHeaders,
        })
        
        const imageColl = await fetch(myRequest)
        setImages(await imageColl.json())
    }

    const selectionChanged = (e) => {
        if(e.target.value !== ' '){
            
            const selectElements = document.getElementsByTagName('select')
            if(e.target.id === 'category_ids'){
                selectElements.breed_id.disabled = true
                selectElements.breed_id.classList.add('disabled')
            } else {
                selectElements.category_ids.disabled = true
                selectElements.category_ids.classList.add('disabled')
            }

        }
        else (
            [...document.getElementsByTagName('select')].map((el) => {
                el.disabled = false
                el.classList.remove('disabled')
                return true
            })
        )
    }

    const openToVote = (e) => {
        const overlayContainer = document.createElement('DIV')
        overlayContainer.classList.add('OverlayContainer')
        overlayContainer.id = e.target.parentNode.parentNode.id
        const overlayImage = document.createElement('DIV')
        overlayImage.style.backgroundImage = 'url(' + e.target.parentNode.parentNode.getElementsByTagName('IMG')[0].src + ')'
        const rootElement = document.getElementsByTagName('body')
        overlayImage.classList.add('OverlayImage')
        
        const likeButton = document.createElement('A')
        likeButton.textContent='VOTE UP'
        likeButton.addEventListener('click', (e)=>{
            castVote(e)
        })
        likeButton.classList.add('Button')
        likeButton.style.cssText = "position: absolute; background-color:#3059ca; margin: 2rem; color: white; border: 1px solid #3059ca; padding: 1rem 2rem; bottom: 0; left: 0; user-select: none; cursor: pointer; font-weight: bolder; a:active{ background-color: #2c4eac; border: #414758 }"
        overlayContainer.appendChild(likeButton)


        const dislikeButton = document.createElement('A')
        dislikeButton.textContent='VOTE DOWN'
        dislikeButton.addEventListener('click', (e)=>{
            castVote(e)
        })
        dislikeButton.classList.add('Button')
        dislikeButton.style.cssText = "position: absolute; background-color:#f85b5b; user-select: none; margin: 2rem; color: white; padding: 1rem 2rem; bottom: 0; cursor: pointer; right: 0; font-weight: bolder;"
        overlayContainer.appendChild(dislikeButton)


        overlayContainer.appendChild(overlayImage)
        rootElement[0].appendChild(overlayContainer)
        overlayImage.addEventListener('click', (e) =>{
            e.preventDefault()
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        })
    }

    const castVote = async (e) => {
        const myHeaders = new Headers();
        myHeaders.append('x-api-key', '1f6c7c69-a465-4a24-a4d7-403323d9f826')
        myHeaders.append('Content-Type', 'application/json')
        
        const voteUrl = `https://api.thecatapi.com/v1/votes`
        const myBody = {
            'image_id': e.target.parentNode.id.toString(),
            'value': (e.target.textContent.includes('UP') ? 1 : 0)
        }

        const myRequest = new Request(voteUrl,{
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(myBody)
        })

        const vote = await fetch(myRequest)
        console.log(vote)
    }

    return(
        <StyledImageSearch>
            <StyledSearchComponent>
                <h1>SEARCH IMAGE</h1>
                <StyledSearchFields url={dropDown}>
                    <div className='grid'>
                        <div className='Select'>
                            <select name='category' id='category_ids' onChange={selectionChanged}>
                                <option value=' '>Select Category</option>
                                {categories.map((category, key)=>{
                                    return <option value={category.id} key={key}>{category.name}</option>
                                })}
                            </select>
                            <img alt='dropDownButton' className='dropDownImage' src={dropDown} />
                        </div>
                        <div className='Select'>
                            <select name='breed' id='breed_id' onChange={selectionChanged}>
                                <option value=' '>Select Breed</option>
                                {
                                    breeds.map((breed, key) => {
                                    return <option value={breed.id} key={key}>{breed.name}</option>    
                                    })
                                }
                            </select>
                            <img alt='dropDownButton' className='dropDownImage' src={dropDown} />
                        </div>
                    </div>
                    <div className='controls'>
                        <StyledButton className='Button' onClick={fetchImages}>Fetch Images</StyledButton>
                        <input type='number' min='9' max='100' maxLength='3' id='limit' defaultValue='50'></input>
                    </div>
                </StyledSearchFields>
            </StyledSearchComponent>
            <StyledImageCollection>
                {images.map((image)=>{
                    return (<StyledImage id={image.id} key={image.id}>
                                <img alt='Cat' key={image.id} src={image.url}/>
                                <span>
                                    <StyledButton onClick={openToVote}>Click to vote</StyledButton>
                                </span>
                            </StyledImage>)
                })}
            </StyledImageCollection>
        </StyledImageSearch>
    )
}

export default ImageSearch;