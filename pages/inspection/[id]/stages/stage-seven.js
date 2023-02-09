import React, { useState, useEffect } from "react";
import InspectionLayout from "../../../../src/layouts/InspectionLayout";
import { Box, Typography, Button, Grid } from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import Boxes from "../../../../src/components/Boxes";
import {
  interior_two,
  electrical_system_one,
} from "../../../../src/utils/temp-data";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { nextStage, prevStage } from "../../../../src/store/reducers/stageReducer";

export default function StageSeven() {
  const router = useRouter();
  const id = router.query.id;
  const [interiorTwo, setInteriorTwo] = useState(interior_two);
  const [electricSystemOne, setElectricSystemOne] = useState(electrical_system_one);
  const [selectedIntId, setSelectedIntId] = useState(null);
  const [selectedElectricId, setSelectedElectricId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setInteriorTwo(interiorTwo);
    setElectricSystemOne(electricSystemOne);
  }, [interiorTwo, electricSystemOne]);

  //this function display the previous button for each car part
  function displayPreview(id) {
    // if the part id is not equal to selectedid, then set the value to current id
    setSelectedIntId(id !== selectedIntId ? id : null);
  }

  //this function display the previous button for each car part
  function displayPreviewTwo(id) {
    // if the part id is not equal to selectedid, then set the value to current id
    setSelectedElectricId(id !== selectedElectricId ? id : null);
  }

  return (
    <InspectionLayout title="Inspection Stage 7" backgroundColor={"#000"} bodyHeight="90vh">
      <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <SubNavBar header="Inspection Stage 7" />
        <div className="px-4">
          <div>
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
              <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={() => router.push(`/inspection/${id}/stages/upload-image`)}
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
              {interiorTwo.map((carInterior) => (
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
                    <Boxes />
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
            <div className="py-3">
              <div className="small fw-bold">Electrical System</div>
              {electricSystemOne.map((carElectric) => (
                <div key={carElectric.id}>
                  <Grid
                    key={carElectric.id}
                    container
                    sx={{
                      mt: 2,
                      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                      padding: "8px",
                    }}
                  >
                    <Grid item xs={8}>
                      <Typography
                        onClick={() => displayPreviewTwo(carElectric.id)}
                        sx={{
                          fontWeight: 400,
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        {carElectric.name}
                      </Typography>
                    </Grid>
                    <Boxes />
                  </Grid>
                  <Box
                    xs={4}
                    sx={{
                      display: `${
                        selectedElectricId === carElectric.id ? "flex" : "none"
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
                    onClick={() => {
                        dispatch(nextStage());
                      }}
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
        </div>
      </Box>
    </InspectionLayout>
  );
}
