import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../pages/AnimalPresentation";
import { getAnimalsFromApi } from "./GetAnimalsFromApi";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("animals") || "[]")
  );

  useEffect(() => {
    if (animals.length !== 0) return;

    const getData = async () => {
      const animals = await getAnimalsFromApi();
      setAnimals(animals);
    };

    if (animals.length === 0) {
      getData();
    } else {
    }
  });

  return (
    <>
      <div className="animalPresentations">
        {animals?.map((animals) => {
          return <AnimalPresentation key={animals.id} animal={animals} />;
        })}
      </div>
    </>
  );
};
