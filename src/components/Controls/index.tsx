import { IIngList } from "@components/Pizza";

import styles from "./style.module.css";
import ConstrolsList from "@components/Controls/ConstrolsList";
import TotalPrice from "@components/Controls/TotalPrice";

interface ControlsProps {
  ings: IIngList;
  add: (type: string) => void;
  remove: (e: any, type: string) => void;
  total: number;
}

const Controls = ({
  ings,
  add,
  remove,
  total,
}: ControlsProps) => {
  return (
    <div>
      <h1 className={styles.title}>Выберите ингредиент</h1>
      <ConstrolsList
        ings={ings}
        add={add}
        remove={remove}
      />
      <TotalPrice total={total} />
    </div>
  );
};

export default Controls;
