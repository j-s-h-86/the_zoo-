import { Navigate, useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export interface IAnimalPresentationProps {
  animal: IAnimal;
}

export const AnimalPresentation = (props: IAnimalPresentationProps) => {
  const navigate = useNavigate();

  return (
    <div className="animalContainer">
      <h2>{props.animal.name}</h2>
      <div className="imgContainer">
        <img src={props.animal.imageUrl} />
      </div>
      <span>{props.animal.shortDescription}</span>
      <button
        className={props.animal.isFed ? "isFed" : "isHungry"}
        onClick={() => {
          navigate("/animal/" + props.animal.id);
        }}
      >
        {props.animal.isFed ? "Visa mer" : "Hungrig!"}
      </button>
    </div>
  );
};
