import React, { useState, useEffect } from "react";
import InspectionLayout from "../../../../src/layouts/InspectionLayout";
import { Box, Typography, Button, Grid } from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import Boxes from "../../../../src/components/Boxes";
import { interior } from "../../../../src/utils/temp-data";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  nextStage,
  prevStage,
} from "../../../../src/store/reducers/stageReducer";

export default function StageEight() {
  const router = useRouter();
  const id = router.query.id;
  const [int, setInt] = useState(interior);
  const [selectedIntId, setSelectedIntId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedRatings = JSON.parse(
      localStorage.getItem("stageeight-ratings")
    );

    if (persistedRatings !== null) setInt(persistedRatings);
  }, []);

  //this function display the previous button for each car part
  function displayPreview(id) {
    // if the part id is not equal to selectedid, then set the value to current id
    setSelectedIntId(id !== selectedIntId ? id : null);
  }

  //the function  update the rating for each id in the array of objects
  const updateRating = (id, rating) => {
    setInt((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, rating };
        }
        return item;
      })
    );
  };

  //loop through the array (ext) and check if some of the objects values is equal to null
  //if they r equal to null, The default value of isDisabled is true
  const isDisabled = int.some((obj) =>
    Object.values(obj).some((values) => values === null)
  );

  //this function save the ratings value nd takes the user to the next stage
  const movetoNextStage = () => {
    localStorage.setItem("stageeight-ratings", JSON.stringify(int));
    dispatch(nextStage());
  };

  return (
    <InspectionLayout
      title="Inspection Stage 8"
      backgroundColor={"#000"}
      bodyHeight="90vh"
    >
      <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <SubNavBar header="Inspection Stage 8" />
        <div className="px-4">
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", color: "#439F6E" }}
              >
                G=Good
              </Typography>
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", color: "#FFB82E" }}
              >
                F=Fair
              </Typography>
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", color: "#F93232" }}
              >
                P=Poor
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                onClick={() =>
                  router.push(`/inspection/${id}/stages/upload-image`)
                }
                sx={{
                  mt: 2,
                  color: "#243773",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                Add Image +
              </Button>
            </Grid>
          </Grid>

          <div className="py-3">
            <div className="small fw-bold">Interior</div>
            {int.map((carInterior) => (
              <div key={carInterior.id}>
                <Grid
                  container
                  sx={{
                    mt: 2,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    padding: "8px",
                  }}
                >
                  <Grid item xs={8}>
                    <Typography
                      onClick={() => displayPreview(carInterior.id)}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    >
                      {carInterior.name}
                    </Typography>
                  </Grid>
                  <Boxes
                    id={carInterior.id}
                    rating={carInterior.rating}
                    updateRating={updateRating}
                  />
                </Grid>
                <Box
                  xs={4}
                  sx={{
                    display: `${
                      selectedIntId === carInterior.id ? "flex" : "none"
                    }`,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    padding: "8px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    onClick={() =>
                      router.push(`/inspection/${id}/stages/upload-stage`)
                    }
                    sx={{
                      color: "#243773",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Preview
                  </Box>
                </Box>
              </div>
            ))}
          </div>

          <div className="mt-5 mb-4" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-5 px-1">
                <Button
                  onClick={() => {
                    dispatch(prevStage());
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    py: 1,
                    borderRadius: 2,
                    fontSize: 12,
                  }}
                >
                  Back
                </Button>
              </div>

              <div className="col-7">
                <Button
                  disabled={isDisabled}
                  onClick={movetoNextStage}
                  variant="contained"
                  size="small"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    py: 1,
                    borderRadius: 2,
                    fontSize: 12,
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Save & Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </InspectionLayout>
  );
}
