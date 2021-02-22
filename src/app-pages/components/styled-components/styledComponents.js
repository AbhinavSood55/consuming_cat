import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #b4cecf;
  width: 100%;
  padding: 0 10%;
  min-height: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .4em;
`

export const StyledContainer = styled.div`
  margin-inline: min(6em, 6vw);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ebebeb;
`


// image-search components

export const StyledButton = styled.a`
    display:inline-block;
    height: auto;
    user-select: none;
    padding:0.7rem 1.7rem;
    cursor: pointer;
    font-size: 1.2rem;
    margin:0.2rem;
    border-radius:0.2rem;
    border: solid 1px #3369ff;
    text-decoration:none;
    font-weight:bold;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    position:relative;

    :active{
        box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
        border-color: #3b3b3b;
    }
`

export const StyledImageSearch = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(126, 129, 160);
    color: white;
    min-height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const StyledSearchFields = styled.div`
    width: 100%;
    border: dotted 1px black;
    min-height: max-content;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .grid{
        width: 90%;
        justify-items: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }
    .Select{
        position: relative;
        margin: 2rem;
        display: flex;
        align-items: center;
        min-height: max-content;
        appearance: none;
        border: none;
        width: 80%;
        padding: 0;
        .disabled{
            background-color: #2f2f2f;
            color: #444444;
            border: none;
        }
        .dropDownImage{
            width: 1.2rem;
            position: absolute;
            right: 5px;
            pointer-events: none;
            background-color: aquamarine;
        }
    }
    select{
        padding: 5px;
        color: white;
        width: 100%;
        min-width: max-content;
        appearance: none;
        border: none;
        border-bottom: solid 1px aquamarine;
        background-color: #727272;
    }
    .controls{
        display: flex;
        align-items: center;
        input{
            width: 6ch;
            height: 100%;
            font-size: 1.2rem;
            padding: 0.7rem;
            margin: 0.2rem;
            appearance: textfield;
        }
    }
`

export const StyledSearchComponent = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    background-color: rgb(70, 77, 150);
    border-radius: 10px;
    min-height: max-content;
`

export const StyledImageCollection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    margin: 2rem;
    justify-items: center;
    place-content: center;
`

export const StyledImage = styled.span`
    background-color: rgba(47, 79, 79, 0.24);
    position: relative;
    
    img{
        width: 350px;
        height: 400px;
        object-fit: cover;
    }
    span{
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        z-index: 1;
        height: 100%;
        width: 100%;
        background-color: rgba(47, 79, 79, 0.5);
    }
    a{
        position: absolute;
        z-index: 1;
        bottom: 10%;
        height: auto;
        display: none;
        left: 50%;
        transform: translate(-50%);
        /* background-color: #3369ff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 1.5rem;
        color: whitesmoke;
        padding: .5rem 1rem; */
    }
    :hover{
        span, a{
            display: unset;
        }
    }
`

// breeds component

export const StyledBreed = styled.div`
    color: white;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    section{
        display: flex;
        flex-direction: column;
        background-color: #6e6d75;
        width: 100%;
        align-items: center;
        padding: 2em 0;
        h1{
            font-weight: bolder;
            font-size: clamp(3vw,2rem,3rem);
        }
    }
    .detailDescription{
        background-color: rgb(70, 77, 150);
        padding: 1em 10vw;
    }

    .img{
        width: max(10rem,30vw);
        height: max(10rem,30vw);
        margin-bottom: 20px;
        border-radius: 50%;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        box-shadow: 0px 0px 10px 5px darkgray;
    }
`;

// Home components

export const StyledHome = styled.div`
  width: 100%;
  .heading {
    background-color: rgb(126, 129, 160);
    text-align: center;
    margin-bottom: 0.2em;
    color: #d9d8fd;
  }
`;

// logo component

export const StyledLogo = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-content: center;
`

// navbar components

export const StyledLi = styled.li`
    list-style: none;
    text-decoration: none;
    color: darkgray;
    align-content: center;
    text-transform: uppercase;
    background-image: linear-gradient(45deg,  rgba(160, 160, 160, 0.7) 5%, rgba(212, 211, 211, 0.25));

    &:hover {
        background-image: linear-gradient(270deg,  rgba(160, 160, 160, 0.7) 5%, rgba(212, 211, 211, 0.25));
    }

    @media (max-width: 1440px) {
        display: flex;
        background-image: none;
        text-align: center;
        font-size: 30rem;
        height: 100%;
        a {
            height: 100%;
            width: 100%;
            display: flex;
        }
    }

`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: 1440px) {
        
        display: ${props => props.showMenu ? 'flex': 'none'};
        position: absolute;
        width: min(30rem, 100vw);
        min-height: 100vh;
        top: 2.5rem;
        background-color: #b4cecf;
        transform: translateX(-82%);
        flex-direction: column;
        overflow-x: hidden;
    }
`;

export const StyledA = styled.div`
    display: block;
    text-decoration: none;
    letter-spacing: 1px;
    color: #3a41a8;
    font-weight: bolder;
    padding: max(1em, 1vw) max(2em, 2vw);
    font-size: max(15px, 1vw);
    @media (max-width: 1440px) {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
    }
`;

export const StyledBurger = styled.div`
        position: relative;
        cursor: pointer;
        display: none;
        flex-direction: column;
        justify-content: center;
        
        width: 2rem;
        min-height: 2rem;

        .cross{
            position: absolute;
            margin: auto 0;
        }
        .top.cross{
            transform: rotate(45deg);
            -webkit-transform :rotate(45deg);
        }
        .center.cross{
            display: none;
        }
        .bottom.cross{
            transform: rotate(-45deg);
            -webkit-transform :rotate(-45deg);
        }

        .line{
            background-color: #834683;
            height: 2px;
            width: 2rem;
            margin: 2px;
        }
        &:hover{
            .line{
                height: 3px;
            }
        }

    @media (max-width: 1440px) {
        display: flex;
    }
`;

export const StyledNavBarContainer = styled.div`
    display: flex;
    width: auto;
    position: relative;
`;

// breedCard component

export const StyledBreedCard = styled.div`
        position: relative;
        padding: .5rem;
        display: flex;
        height: clamp(15vw, 10rem, 15rem);
        width: 100%;
        background-color: rgb(70, 77, 150);
        border-radius: 2em;
        font-size: clamp(1vw, 15px, 20px);
        transition: box-shadow 200ms ease-in;
        overflow: hidden;
        h1{
            text-align: center;
            margin-inline: .5em;
        }

        .card-body{
            width: 100%;
            height: 100%;
        }
        .button{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-color: rgb(116, 119, 153);
            border-radius: 2rem;
        }
        .cat-details{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            line-height: 30px;
            align-items: center;

            span{
                background-color: aliceblue;
                color: #464646;
                border-radius: 2px;
                padding-inline: 3px;
            }
        }
        *{
            color: #ffffff;
        }

        img{
            cursor: pointer;
            margin-inline: 1em;
            border-radius: 50%;
            width: clamp(10vw, 2rem, 3rem);
            height: clamp(10vw, 2rem, 3rem);
            object-fit: cover;
            border-width: 2px;
            border-color: #e0e0e0;
            border-style: solid;
        }
        .Image{
            position: relative;
            display: flex;
            align-items: center;
            padding: 1vw;
        }
        .Image::after{
            content: ' ';
            position: absolute;
            width: 1px;
            height: 80%;
            right: 10px;
            top: 10%;
            background-color: #a6cfcf;
        }
        :hover, :focus, :active{
            box-shadow: 0 8px 6px -6px #464646;
        }

        @media (max-width: 490px) {
            flex-direction: column;
            height: 15rem;
            width: 80vw;
            .Image{
                flex-direction: column;
            }
            .Image::after{
                position: initial;
                margin-top: 5px;
                width: 50%;
                height: 1px;
            }
            img{
                width: 15vw;
                height: 15vw;
            }
        }
;
`

// breedCollection component

export const StyledBreedCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(25rem, 25vw, 30vw), auto));
  grid-gap: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: #6e6d75;
  justify-items: center;

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
    padding: .5vw;
  }
`;