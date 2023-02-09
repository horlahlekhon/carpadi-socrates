import React, {useState} from "react";
import {Box, AppBar, Toolbar, IconButton, Typography, TextField, Fade, FormControl, InputLabel, Select, MenuItem, Grid} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { SearchOutlined } from "@mui/icons-material";
import ClearIcon from '@mui/icons-material/Clear';


export default function TopNavBar({text, searching, clear, handleSearch,handleOptionChange, selected}) {

    const [searchDisplay, setSearchDisplay] = useState(false);
    const [filterDisplay, setFilterDisplay] = useState(false);


    return (
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setFilterDisplay(!filterDisplay);
                setSearchDisplay(false)
              }}
              sx={{
                mr: 2,
                flexGrow: 1,
                display: "flex",
                justifyContent: "start",
              }}
            >
              <FilterListIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: "block" }}
            >
              {text}
            </Typography>

            <IconButton
              size="large"
              aria-label="search"
              onClick={() => {
                setSearchDisplay(!searchDisplay)
                setFilterDisplay(false);
              }}
              color="inherit"
            >
              <SearchOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>

      <Fade in={filterDisplay}>
        <div
          className="border-bottom"
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            zIndex: "1000",
            width: "100%",
          }}
        >
          <Grid container sx={{ m: 1.5 }}>
            <Grid item xs={4}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">State</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={selected}
                  label="State"
                  onChange={handleOptionChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Abuja">Abuja</MenuItem>
                  <MenuItem value="Jos">Jos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              {/*    
      <FormControl sx={{ ml: 2, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">State</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={selected}
                label="State"
                onChange={handleOptionChange}>
                <MenuItem value="Lagos">Lagos</MenuItem>
                <MenuItem value="Abuja">Abuja</MenuItem>
                <MenuItem value="Jos">Jos</MenuItem>
              </Select>
            </FormControl> */}
            </Grid>
          </Grid>
        </div>
        </Fade>

        {/* <Form.Control
          as="select"
          aria-label="country"
          value={selected}
          onChange={handleOptionChange}>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Control> */}

        {/* <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">State</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={selected}
            label="State"
            onChange={handleOptionChange}>
            <MenuItem value="Lagos">Lagos</MenuItem>
            <MenuItem value="Abuja">Abuja</MenuItem>
            <MenuItem value="Jos">Jos</MenuItem>
          </Select>
        </FormControl> */}

        {/* <Select
          options={options}
          value={selected}
          onChange={handleOptionChange}
          autoFocus={true}
        /> */}

        <Fade in={searchDisplay}>
          <TextField
            fullWidth
            sx={{
              backgroundColor: "#fff",
              position: "absolute",
              zIndex: "1000",
            }}
            id="standard-bare"
            variant="outlined"
            placeholder="Search for a specific car"
            value={searching}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <IconButton onClick={clear}>
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
        </Fade>
      </Box>
    );
}



// const SearchBar = (props) => {
//     const {value, onChange} = props;
//       return (
//         <TextField 
//         value={value}
//          onChange={(e) => {onChange(e.value)}}
//         />
//       )
//     }