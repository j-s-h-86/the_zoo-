import { useEffect } from "react";
import { getAnimalsFromApi } from "../components/GetAnimalsFromApi";
import { UnfedAnimals } from "../components/UnfedAnimals";
import "../styles/_home.scss";

export const Home = () => {
  useEffect(() => {
    const unfedAnimalsFromLS = JSON.parse(
      localStorage.getItem("animals") || "[]"
    );

    if (!unfedAnimalsFromLS) {
      getAnimalsFromApi();
    }

    const getData = async () => {
      await getAnimalsFromApi();
    };

    if (unfedAnimalsFromLS.length === 0) {
      getData();
    }

    return;
  });
  return (
    <>
      <div className="herosection">
        <UnfedAnimals />
      </div>
    </>
  );
};
