import { pokemons } from "./data";

export function getData() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterData(Type) {
  let filtred = getData().filter(type => type.tipo === Type);
  return filtred;
}
