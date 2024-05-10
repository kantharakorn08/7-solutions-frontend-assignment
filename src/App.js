import "./App.css";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataTypeCard from "./components/dataTypeCard";
import DataButton from "./components/dataButton";
import { useEffect } from "react";
import { handleFetchUsers } from "./services/event";

function App() {
  const dispatch = useDispatch();
  const { dataLists, jsonData } = useSelector((state) => state.toDoList);

  useEffect(() => {
    dispatch(handleFetchUsers());
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: "40vh", mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          1. Auto Delete Todo List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {_.map(dataLists, (item) => {
                return (
                  <DataButton
                    item={item}
                    dataLists={dataLists}
                    action={"add"}
                  />
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
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          2. Create data from API (OPTIONAL)
        </Typography>
        <textarea
          style={{ width: "100%" }}
          rows="50"
          value={JSON.stringify(jsonData, null, 2)}
        />
      </Box>
    </Container>
  );
}

export default App;
