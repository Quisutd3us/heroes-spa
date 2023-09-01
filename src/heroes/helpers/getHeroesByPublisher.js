import {heroes} from "../data/heros.js";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers =['Marvel Comics','DC Comics'];
  if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid Publisher..`)
  }
  return heroes.filter((heroData) => heroData.publisher === publisher);
}