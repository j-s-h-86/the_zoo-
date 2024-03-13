import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimalsFromApi = async () => {
  const response = await axios.get<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  localStorage.setItem("animals", JSON.stringify(response.data));

  return response.data;
};
