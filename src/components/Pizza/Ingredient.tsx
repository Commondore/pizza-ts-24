interface IngredientProps {
  type: string;
}
const Ingredient = ({ type }: IngredientProps) => {
  return <img src={`/img/${type}.png`} alt={type} />;
};

export default Ingredient;
