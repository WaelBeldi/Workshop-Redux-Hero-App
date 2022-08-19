import { ADD_HERO, DELETE_HERO } from "../constant/actionTypes";

export const add_hero = (newHero) => {
  return {
    type: ADD_HERO,
    payload: newHero,
  };
};

export const delete_hero = (id) => {
    return {
      type: DELETE_HERO,
      payload: id,
    };
  };