import PropTypes from "prop-types";
import {getHeroesByPublisher} from "../helpers";
import {HeroCard} from "./";
import {useMemo} from "react";

export const HeroesList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
      <>
        {
          heroes.map((hero) => (
              <HeroCard
                  key={hero.id}
                  {...hero}
              />
          ))
        }
      </>
  )
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired
}

