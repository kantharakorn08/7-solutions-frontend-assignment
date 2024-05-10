import {
  addFruit,
  addVegetable,
  removeFruit,
  removeVegetable,
  setDataLists,
  addDataLists,
} from ".";
import _ from "lodash";
import { dataSet } from "../../../constants";

export const onButtonClick =
  (dataLists, value, action, toDoList = null, isAuto = false) =>
  (dispatch) => {
    const type = _.get(value, "type");
    if (action === "add") {
      const newDataLists = _.filter(dataLists, (item) => {
        return _.get(item, "name") !== _.get(value, "name");
      });

      dispatch(setDataLists({ value: newDataLists }));
      if (type === "Fruit") {
        dispatch(addFruit({ value }));
      } else {
        //vegetables
        dispatch(addVegetable({ value }));
      }
    } else {

      const dataToReturn = _.find(dataSet, (item) => {
        return _.get(item, "name") === _.get(value, "name");
      });

      dispatch(addDataLists({ value: dataToReturn }));

      if (type === "Fruit") {
        dispatch(removeFruit({ value }));
      } else {
        //vegetables
        dispatch(
          removeVegetable({
            value,
          })
        );
      }
    }
  };
