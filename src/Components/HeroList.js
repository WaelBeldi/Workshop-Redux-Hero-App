import React from "react";
import HeroCard from "./HeroCard";

const HeroList = ({ heroes, filterName }) => {
  return (
    <div className="hero-list">
      {heroes
        .filter((hero) =>
          hero.name
            .toLowerCase()
            .trim()
            .includes(filterName.toLowerCase().trim())
        )
        .map((hero) => (
          <div key={hero.id}>
            <HeroCard hero={hero} key={hero.id} />
          </div>
        ))}
    </div>
  );
};

export default HeroList;
