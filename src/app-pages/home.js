import { StyledHome } from "./components/styled-components/styledComponents";
import BreedCollection from "./components/breeds/breedCollection";

const Home = () => {
  return (
    <StyledHome className="home">
      <BreedCollection />
    </StyledHome>
  );
};

export default Home;
