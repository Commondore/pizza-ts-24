import { IIngList } from "@components/Pizza";

import styles from "./style.module.css";
import ControlItem from "@components/Controls/ControlItem";

interface ConstrolsListProps {
  ings: IIngList;
  add: (type: string) => void;
  remove: (e: any, type: string) => void;
}

const ConstrolsList = ({
  ings,
  add,
  remove,
}: ConstrolsListProps) => {
  return (
    <div className={styles.controls}>
      {Object.keys(ings).map((ingName) => {
        return (
          <ControlItem
            key={ingName}
            ing={ingName}
            add={() => add(ingName)}
            remove={(e) => remove(e, ingName)}
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
