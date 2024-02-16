import Pizza from "@components/Pizza/Pizza";
import Button from "@shared/UI/Button/Button";

interface CheckoutSummaryProps {
  ings: string[];
}
const CheckoutSummary = ({
  ings,
}: CheckoutSummaryProps) => {
  return (
    <>
      <Pizza ings={ings} />
      <div>
        <h1>Подтвердите свой заказ</h1>
        <div>
          <Button click={() => {}}>Отмена</Button>
          <Button click={() => {}}>Оформить</Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;
