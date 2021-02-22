import './App.css';
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Redirect} from 'react-router-dom';
import NavBar from './app-pages/navbar';
import Logo from './app-pages/logo';
import Breeds from './app-pages/breeds';
import Favourites from './app-pages/favourites';
// import Votes from './app-pages/vote';
import ImageSearch from './app-pages/image-search';
import Home from './app-pages/home';
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { setBreeds, setCategories } from './actions'
import { StyledNav, StyledContainer } from './app-pages/components/styled-components/styledComponents'

function App() {
  
  const dispatch = useDispatch();
  const [isBreedsLoading, setIsBreedsLoading] = useState(true)
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true)

  useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append('x-api-key', '1f6c7c69-a465-4a24-a4d7-403323d9f826')
        let myRequest = new Request('https://api.thecatapi.com/v1/breeds',{
          method: 'GET',
          headers: myHeaders
        })
        const fetchBreeds = async(myRequest) =>{
            const bCol = await fetch(myRequest)
            const catApiData = await bCol.json()
            console.log(catApiData)
            dispatch(setBreeds(catApiData))
            setIsBreedsLoading(false)
        }
        fetchBreeds(myRequest)
        const fetchCategories = async(myRequest) => {
          const categCol = await fetch(myRequest)
          const categData = await categCol.json()
          console.log(categData)
          dispatch(setCategories(categData))
          setIsCategoriesLoading(false)
        }
        myRequest = new Request('https://api.thecatapi.com/v1/categories',{
          method: 'GET',
          headers: myHeaders
        })
        fetchCategories(myRequest)
}, [dispatch])

  return (
    
      <Router>
        <div className="App">
          <StyledNav>
            <Logo/>
            <NavBar/>
          </StyledNav>

          <StyledContainer className='container'>
          <Switch>
              <Route exact path="/breed/">
                {isBreedsLoading ?
                  <div>Loading...</div>
                  : <Breeds />
                }
              </Route>
              <Route exact path="/image-search/">
                {isCategoriesLoading ?
                  <div>Loading...</div>
                  : <ImageSearch />
                }
              </Route>
              <Route exact path="/favourites/">
                <Favourites />
              </Route>
              <Route exact path="/home">
                {isBreedsLoading ?
                  <div>Loading...</div>
                  : <Home />
                }
              </Route>
              <Route path="/">
                <Redirect to="/home/" />
              </Route>
          </Switch>
          </StyledContainer>
        </div>
      </Router>
    
  );
}

export default App;