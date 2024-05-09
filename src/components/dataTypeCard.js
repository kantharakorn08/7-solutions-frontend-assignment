import _ from "lodash";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import DataButton from "./dataButton";

export const DataHeader = styled(CardHeader)(() => ({
  padding: 5,
}));

const DataTypeCard = ({ typeText, type, dataLists }) => {
  const toDoList = useSelector((state) => state.toDoList);

  return (
    <Card sx={{ minHeight: "800px" }}>
      <DataHeader
        sx={{
          textAlign: "center",
          backgroundColor: "lightgray",
        }}
        titleTypographyProps={{ variant: "h6" }}
        title={typeText}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {_.map(_.get(toDoList, `${type}`, []), (item, index) => {
            return (
              <DataButton
                key={index}
                item={item}
                dataLists={dataLists}
                action={"remove"}
                toDoList={toDoList}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DataTypeCard;
