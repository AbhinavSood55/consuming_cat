import { StyledBreedCollection } from "../styled-components/styledComponents";
import BreedCard from "./breedCard";
import { useSelector } from "react-redux";

const BreedCollection = () => {
  const breeds = useSelector(state => state.breeds)

    return (
      <StyledBreedCollection className='breedCollection'>
        {
          breeds.map((breed, key) => {
            return <BreedCard key={breed.id} breed={breed} />;
          })
        }
      </StyledBreedCollection>
    );
};

export default BreedCollection;