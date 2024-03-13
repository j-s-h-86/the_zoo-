import { IAnimal } from "../models/IAnimal";
import { getAnimalsFromApi } from "./GetAnimalsFromApi";

export const UnfedAnimals = () => {
  const unfedAnimalsFromLS = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  if (!unfedAnimalsFromLS) {
    getAnimalsFromApi();
  }

  const countUnfedAnimals = (animals: IAnimal[]) => {
    let count = 0;
    for (let i = 0; i < animals.length; i++) {
      if (!animals[i].isFed) {
        count++;
      }
    }
    return count;
  };

  const unfedAnimalCount = countUnfedAnimals(unfedAnimalsFromLS);

  return (
    <div className="hungryAnimals">
      <h2>Du har {unfedAnimalCount} hungriga djur!</h2>
    </div>
  );
};
