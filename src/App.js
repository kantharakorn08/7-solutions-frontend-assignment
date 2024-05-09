import "./App.css";
import _ from "lodash";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataTypeCard from "./components/dataTypeCard";
import DataButton from "./components/dataButton";

function App() {
  const { dataLists } = useSelector((state) => state.toDoList);

  return (
    <Container sx={{ minHeight: "70%" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        1. Auto Delete Todo List
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {_.map(dataLists, (item) => {
              return (
                <DataButton item={item} dataLists={dataLists} action={"add"} />
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <DataTypeCard
            typeText={"Fruit"}
            type={"fruits"}
            dataLists={dataLists}
          />
        </Grid>
        <Grid item xs={4}>
          <DataTypeCard
            typeText={"Vegetable"}
            type={"vegetables"}
            dataLists={dataLists}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
