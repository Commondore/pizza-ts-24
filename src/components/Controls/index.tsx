import { IIngList } from "@components/Pizza";

import styles from "./style.module.css";
import ConstrolsList from "@components/Controls/ConstrolsList";

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
      <div>
        Общая стоимость: <strong>{total} сом</strong>
      </div>
    </div>
  );
};

export default Controls;
