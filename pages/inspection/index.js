import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import CarItem from "../../src/components/CarItem";
import { Cars } from "../../src/utils/temp-data";
import TopNavBar from "../../src/components/TopNavBar";




export default function InspectionIndex() {
  const [buttonSelect, setButtonSelect] = useState("new");
  const [cars, setCars] = useState(
    Cars.filter((car) => car.type === buttonSelect)
  );
  const [link, setLink] = useState("/inspection");
  const [searching, setSearching] = useState("");
  const [selected, setSelected] = useState("");

  //function that chnages the car list based on selected tab(button)
  const handleButtonSelect = (value) => {
    setButtonSelect(value);
    setCars(Cars.filter((car) => car.type === value));
  };

  //function to search for specific cars from api car list
  const handleSearch = (e) => {
    const searchVal = e.target.value;

    //if search value is not a empty string
    if (searchVal !== "") {
      //filter the car list based on the user's search input
      const filteredCars = cars.filter((car) => {
        return car.model.toLowerCase().includes(searchVal.toLowerCase());
      });
      setCars(filteredCars);
    } 
    //else -> if search value is an empty string, return the whole car list
    else {
      setCars(Cars);
    }

    setSearching(searchVal);
  };

  //function that clears the search input and return full list of cars
  const clearSearch = () => {
    setSearching("");
    setCars(Cars);
  };

  //function to return car lsit based on the option user chooses
  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;

    //if the selected option is equal to all
    if (selectedOption.toLowerCase() === "all") {
      setCars(Cars);
    } 
    //else return specific car based on chosen option
    else {
      const filterCars = Cars.filter((car) =>
        car.description.toLowerCase().includes(selectedOption.toLowerCase())
      );

      setCars(filterCars);
    }
    setSelected(selectedOption);
  };

  useEffect(() => {
    setCars(cars);
  }, [cars, buttonSelect]);

  return (
    <InspectionLayout
      activeNav={1}
      title="inspection home page"
      backgroundColor={"#000"}
      topbar={
        <TopNavBar
          searching={searching}
          clear={clearSearch}
          handleSearch={handleSearch}
          selected={selected}
          handleOptionChange={handleOptionChange}
        />
      }
      bodyHeight="81.5vh"
    >
      <div className="p-2 border-bottom">
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={4}>
            <Button
              onClick={() => handleButtonSelect("new")}
              variant={buttonSelect === "new" ? "contained" : "text"}
              fullWidth
              sx={{
                borderRadius: 5,
                textTransform: "none",
              }}
            >
              New
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleButtonSelect("old")}
              variant={buttonSelect === "old" ? "contained" : "text"}
              fullWidth
              sx={{
                borderRadius: 5,
                textTransform: "none",
              }}
            >
              Ongoing
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => {
                handleButtonSelect("inspected");
                setLink("/inspection/inspected");
              }}
              variant={buttonSelect === "inspected" ? "contained" : "text"}
              fullWidth
              sx={{
                borderRadius: 5,
                textTransform: "none",
              }}
            >
              Inspected
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="px-3 py-2">
        {cars && cars.length > 0 ? (
          cars.map((item) => (
            <div className="mb-4" key={Math.random()}>
              <CarItem
                carLink={buttonSelect === 'old' ? `inspection/${item.id}/continue` : `${link}/${item.id}`}
                image_url={item.image}
                address={item.description}
                model={item.model}
                date={item.date}
                button_text={
                  buttonSelect === "new" ? "Start Inspection" : buttonSelect === "old" ? "Continue" : buttonSelect === "inspected" ? "View Details" : ""
                }
              />
            </div>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>
            No cars found
          </Typography>
        )}
      </div>
    </InspectionLayout>
  );
}
