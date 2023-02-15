import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InspectionLayout from "../../../../src/layouts/InspectionLayout";
import { useDispatch } from "react-redux";
import { nextStage } from "../../../../src/store/reducers/stageReducer";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

export default function StageOne() {
  const router = useRouter()
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    inspectorname: '',
    inspectiondate: '',
    ownersname: '',
    year: '',
    brand: '',
    model: '',
    mileage: '',
    vin: '',
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

      localStorage.setItem("stageOneFormData", JSON.stringify(formData));
      dispatch(nextStage())
  }


  useEffect(() => {
    const persistedData = localStorage.getItem("stageOneFormData");
    
    if (persistedData !== null) setFormData(JSON.parse(persistedData));
  }, []);
 
 

  return (
    <InspectionLayout
      title="Inspection Stage 1"
      backgroundColor={"#000"}
      bodyHeight="90vh"
    >
      <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <SubNavBar header="Inspection Stage 1" />
        <Form onSubmit={handleSubmit}>
        <div className="px-4 mb-5">
          <div>
            <div className="py-2">
              <div className="small fw-bold">Inspector's Details</div>

    
    
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs={5}>
                  <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                    Inspector’s Name
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    Inspection Date
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    sx={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px: 1 }}
                    id="standard-basic"
                    variant="standard"
                    placeholder="Jhon Do Smith"
                    name="inspectorname"
                    value={formData.inspectorname}
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
                    placeholder="June 12 | 2020"
                    name="inspectiondate"
                    value={formData.inspectiondate}
                    onChange={handleChange}
                    
                  />
                </Grid>
              </Grid>
            </div>
            <div className="py-2">
              <div className="small fw-bold">Vehicle Informations</div>

              <Grid container sx={{ mt: 2 }}>
                <Grid item xs={5}>
                  <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                    Owner’s Name
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    Year
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    Brand
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    Model
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    Mileage
                  </Typography>
                  <Typography sx={{ mt: 4, fontWeight: 400, fontSize: "16px" }}>
                    VIN
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    sx={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px: 1 }}
                    id="standard-basic"
                    variant="standard"
                    placeholder="Yusuf Adebayo"
                    name="ownersname"
                    value={formData.ownersname}
                    onChange={handleChange}
                    
                  />
                  <TextField
                    sx={{
                      mt: 3,
                      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                      px: 1,
                    }}
                    id="standard-basic"
                    type='number'
                    variant="standard"
                    placeholder="2015"
                    name="year"
                    value={formData.year}
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
                    placeholder="Toyota"
                    name="brand"
                    value={formData.brand}
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
                    placeholder="Camry"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    
                  />
                  <TextField
                    sx={{
                      mt: 3,
                      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                      px: 1,
                    }}
                    id="standard-basic"
                    type='number'
                    pattern='(?=.{1,8}$)\d+)'
                    variant="standard"
                    placeholder="18,000"
                    name="mileage"
                    value={formData.mileage}
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
                    placeholder="BC83891899837"
                    name="vin"
                    value={formData.vin}
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

            <div
              className="mt-5"
              style={{ width: "100%", marginBottom: "50px" }}
            >
              <div className="row">
                <div className="col-5 px-1">
                  <Button
                    onClick={() => router.back()}
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
        </div>
        </Form>
      </Box>
    </InspectionLayout>
  );
}
