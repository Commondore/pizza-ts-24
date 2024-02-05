import { IIngList } from "@components/Pizza";

import styles from "./style.module.css";
import ControlItem from "@components/Controls/ControlItem";

interface ConstrolsListProps {
  ings: IIngList;
}

const ConstrolsList = ({ ings }: ConstrolsListProps) => {
  return (
    <div className={styles.controls}>
      {Object.keys(ings).map((ingName) => {
        return (
          <ControlItem
            key={ingName}
            ing={ingName}
            // name={ings[ingName].name}
            // count={ings[ingName].count}
            {...ings[ingName]}
          />
        );
      })}
    </div>
  );
};

export default ConstrolsList;
