import PropTypes from "prop-types";
import {getHeroesByPublisher} from "../helpers";
import {HeroCard} from "./";

export const HeroesList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher);
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

