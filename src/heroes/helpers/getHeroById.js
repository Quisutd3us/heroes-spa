import {heroes} from "../data/heros.js";

export const getHeroById = (id)=>{
  return heroes.find(hero => hero.id === id);
};