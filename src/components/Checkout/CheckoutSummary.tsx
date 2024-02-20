import { IIngs } from "@components/Checkout";
import Pizza from "@components/Pizza/Pizza";
import Button from "@shared/UI/Button/Button";
import { Outlet } from "react-router-dom";

interface CheckoutSummaryProps {
  ings: IIngs;
  cancel: () => void;
  continued: () => void;
}
const CheckoutSummary = ({
  ings,
  cancel,
  continued,
}: CheckoutSummaryProps) => {
  const filtredIngredients = () => {
    return Object.keys(ings).filter((ingName) => {
      return ings[ingName] > 0;
    });
  };

  return (
    <>
      <Pizza ings={filtredIngredients()} />
      <div>
        <h1 style={{ textAlign: "center" }}>
          Подтвердите свой заказ
        </h1>
        <div style={{ textAlign: "center" }}>
          <Button click={cancel} color={"danger"}>
            Отмена
          </Button>
          <Button click={continued} color={"success"}>
            Оформить
          </Button>
        </div>

        <Outlet context={{ ings }} />
      </div>
    </>
  );
};

export default CheckoutSummary;
