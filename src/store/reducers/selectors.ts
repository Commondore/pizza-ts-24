import { RootState } from "@store";

export const transformIngs = (store: RootState) => {
  const ings = store.pizza.ings;
  return Object.keys(ings).reduce<Record<string, number>>(
    (acc, ingName) => {
      acc[ingName] = ings[ingName].count;
      return acc;
    },
    {}
  );
};
