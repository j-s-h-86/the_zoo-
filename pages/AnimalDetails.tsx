import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router-dom";

export const AnimalDetails = () => {
  const [animal, setAnimal] = useState<IAnimal>();

  const { animalId } = useParams();
  let id = 0;
  if (animalId) {
    id = +animalId;
  }

  const fromLS = localStorage.getItem("animals");

  if (fromLS && !animal) {
    const animalsFromLS: IAnimal[] = JSON.parse(fromLS);

    for (let i = 0; i < animalsFromLS.length; i++) {
      if (animalsFromLS[i].id === id) {
        setAnimal(animalsFromLS[i]);
      }
    }
  }

  const updateLocalStorage = (fedAnimal: IAnimal) => {
    if (fedAnimal) {
      const fedAnimals = JSON.parse(
        localStorage.getItem("animals") || "[]"
      ).map((a: IAnimal) => (a.id === fedAnimal.id ? fedAnimal : a));
      localStorage.setItem("animals", JSON.stringify(fedAnimals));
    }
  };

  const handleClick = () => {
    if (animal) {
      const feedTime = new Date();
      const fedAnimal = { ...animal, isFed: true, lastFed: feedTime };
      setAnimal(fedAnimal);
      updateLocalStorage(fedAnimal);
    }
  };

  return (
    <>
      <div className="animalDetails">
        <h2>{animal?.name}</h2>
        <div className="imgDetailContainer">
          <img src={animal?.imageUrl} />
        </div>
        <p>
          <i>{animal?.latinName}</i>
        </p>
        <span>{animal?.shortDescription}</span>
        <button
          className={animal?.isFed ? "isFed" : "isHungry"}
          onClick={handleClick}
          disabled={animal?.isFed}
        >
          {animal?.isFed ? "Matad." : "Mata!"}
        </button>
        <p>{animal?.isFed ? `Matad: ${animal.lastFed}` : ""}</p>
      </div>
    </>
  );
};
