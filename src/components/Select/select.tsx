import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMUI, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  disable: boolean;
};

export default function Select(props: SelectProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tempo</InputLabel>
        <SelectMUI
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tempo"
          onChange={handleChange}
          disabled={props.disable}
          defaultValue="10"
        >
          <MenuItem value={10}>1min</MenuItem>
          <MenuItem value={20}>2min</MenuItem>
          <MenuItem value={30}>3min</MenuItem>
        </SelectMUI>
      </FormControl>
    </Box>
  );
}
