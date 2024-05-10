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
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (action === "remove") {
      let removeTimer = setTimeout(() => {
        dispatch(onButtonClick(dataLists, item, action, toDoList, true));
        return () => {
          clearTimeout(removeTimer);
        };
      }, 5000);
    }
  }, []);
  return (
    <Button
      sx={{ width: "100%", textTransform: "none" }}
      variant="outlined"
      onClick={() => dispatch(onButtonClick(dataLists, item, action, toDoList))}
    >
      {_.get(item, "name")}
    </Button>
  );
};

export default DataButton;
