import React, { useState, useEffect } from "react";
import InspectionLayout from "../../../../src/layouts/InspectionLayout";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useDispatch } from "react-redux";
import { nextStage, prevStage } from "../../../../src/store/reducers/stageReducer";
import { Form } from "react-bootstrap";

export default function StageTwo() {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    bodystyle: '',
    transmission: '',
    engine: '',
    drivetype: '',
    doorcount: '',
    exteriorcount: '',
    interiorcount: '',
    review: ''

  });


  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    
  };


  const isFormDataEmpty = () => {
    return Object.values(formData).some(value => value === '');
  };

  const isDisabled = isFormDataEmpty()

  const handleSubmit = (event) => {
      event.preventDefault()

      localStorage.setItem("stageTwoFormData", JSON.stringify(formData));
      dispatch(nextStage())
  }


  useEffect(() => {
    const persistedData = localStorage.getItem("stageTwoFormData");
    if (persistedData !== null) setFormData(JSON.parse(persistedData));
  }, []);
 

  return (
    <InspectionLayout title="Inspection Stage 2" backgroundColor={"#000"} bodyHeight="90vh">
      <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <SubNavBar header="Inspection Stage 2" />
        <Form onSubmit={handleSubmit}>
        <div className="px-4">
          <div className="py-2">
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={5}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Body Style
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Transmission
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Engine
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Drive Type
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Door Count
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Exterior Color
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                  Interior Color
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  sx={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px: 1 }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Sedan"
                  name="bodystyle"
                  value={formData.bodystyle}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Automatic"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Type Here"
                  name="engine"
                  value={formData.engine}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Type Here"
                  name="drivetype"
                  value={formData.drivetype}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="4"
                  name="doorcount"
                  value={formData.doorcount}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="White"
                  name="exteriorcount"
                  value={formData.exteriorcount}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    mt: 3,
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                    px: 1,
                  }}
                  id="standard-basic"
                  variant="standard"
                  placeholder="Ash"
                  name="interiorcount"
                  value={formData.interiorcount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>

          <div className="py-5">
            <div
              className="small fw-bold"
              style={{ textTransform: "uppercase" }}
            >
              Review
            </div>
            <TextareaAutosize
              aria-label="review"
              placeholder="Type Here"
              name="review"
              value={formData.review}
              onChange={handleChange}
              style={{
                width: "100%",
                outline: "0",
                resize: "none",
                marginTop: "5px",
                padding: "0 0 50px",
                border: "none",
                borderBottom: "1px solid #DEDEDE",
              }}
            />
          </div>
          <div className="mt-5 mb-4" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-5 px-1">
                <Button
                   onClick={() => {
                     dispatch(prevStage())
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
                   type='submit'
                   disabled={isDisabled}
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
        </Form>
      </Box>
    </InspectionLayout>
  );
}
