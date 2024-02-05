import { IIngList } from "@components/Pizza";

import styles from "./style.module.css";
import ConstrolsList from "@components/Controls/ConstrolsList";

interface ControlsProps {
  ings: IIngList;
}

const Controls = ({ ings }: ControlsProps) => {
  return (
    <div>
      <h1 className={styles.title}>Выберите ингредиент</h1>
      <ConstrolsList ings={ings} />
    </div>
  );
};

export default Controls;
