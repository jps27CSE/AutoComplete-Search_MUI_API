import { Autocomplete, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [name, SetName] = useState([]);

  useEffect(() => {
    const getCountry = async (state) => {
      const res = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resposne) => {
          console.log(resposne.data);
          SetName(resposne.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCountry();
  }, []);

  return (
    <Container>
      <Autocomplete
        id="name"
        getOptionLabel={(name) => `${name.name}`}
        options={name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText={"No Available User"}
        renderOption={(props, name) => (
          <Box component="li" {...props} key={name.id}>
            {name.name}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options=""
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options=""
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      /> */}
    </Container>
  );
};

export default App;
