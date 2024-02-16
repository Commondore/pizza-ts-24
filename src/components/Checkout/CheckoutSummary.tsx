import Pizza from "@components/Pizza/Pizza";
import Button from "@shared/UI/Button/Button";
import { Outlet } from "react-router-dom";

interface CheckoutSummaryProps {
  ings: string[];
  cancel: () => void;
  continued: () => void;
}
const CheckoutSummary = ({
  ings,
  cancel,
  continued,
}: CheckoutSummaryProps) => {
  return (
    <>
      <Pizza ings={ings} />
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
