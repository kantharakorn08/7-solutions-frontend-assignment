import _ from "lodash";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { onButtonClick } from "../redux/slices/toDoList/event";
import { useEffect } from "react";

const DataButton = ({
  dataLists,
  item,
  action,
  toDoList = null,
  autoRemove = null,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (action === "remove") {
      let removeTimer = setTimeout(() => {
        dispatch(onButtonClick(dataLists, item, action, toDoList));
      }, 100);

      return () => {
        clearTimeout(removeTimer);
      };
    }
  }, []);
  return (
    <Button
      sx={{ width: "100%", textTransform: "none" }}
      variant="contained"
      onClick={() => dispatch(onButtonClick(dataLists, item, action, toDoList))}
    >
      {_.get(item, "name")}
    </Button>
  );
};

export default DataButton;
