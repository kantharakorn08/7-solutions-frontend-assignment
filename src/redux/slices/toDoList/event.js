import {
  addFruit,
  addVegetable,
  removeFruit,
  removeVegetable,
  setDataLists,
} from ".";
import _ from "lodash";
import { dataSet } from "../../../constants";

export const onButtonClick =
  (dataLists, value, action, toDoList = null) =>
  (dispatch) => {
    const type = _.get(value, "type");
    const typeState =
      _.get(value, "type") === "Fruit" ? "fruits" : "vegetables";
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
      const newDataValue = _.filter(
        _.get(toDoList, `${typeState}`, []),
        (item) => {
          return _.get(item, "name") !== _.get(value, "name");
        }
      );

      const dataToReturn = _.find(dataSet, (item) => {
        return _.get(item, "name") === _.get(value, "name");
      });

      if (!_.isEmpty(dataToReturn)) {
        console.log("dataSet", dataSet);
        console.log("dataToReturn", dataToReturn);
      }
      console.log("value", value);
      console.log("newDataValue", newDataValue);

      if (type === "Fruit") {
        dispatch(removeFruit({ value: newDataValue, dataToReturn }));
      } else {
        //vegetables
        dispatch(removeVegetable({ value: newDataValue, dataToReturn }));
      }
    }
  };
