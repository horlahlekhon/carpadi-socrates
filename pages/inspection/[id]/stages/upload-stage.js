import React, { useState, useEffect } from "react";
import MobileLayout from "../../../../src/layouts/MobileLayout";
import { Box, Typography, Button, Grid, TextareaAutosize } from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import { exterior } from "../../../../src/utils/temp-data";
import Drawer from "@mui/material/Drawer";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import { useRouter } from "next/router";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;

  @media (max-width: 500px) {
    video {
      margin-top: 100px;
      object-fit: cover;
      height: 60vh;
    }
  }
`;

export default function UploadStage() {
  const maxNumber = 1;
  const placeholderImg = "/images/car_placeholder.png";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const [retakePic, setRetakePic] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [switchImg, setSwitchImg] = useState("camera");
  const [reUpload, setReupload] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
    review: "",
  });
  const [savedImgData, setSavedImgData] = useState(null);
  const [imgDataDisplay, setImgDataDisplay] = useState(false);
  const getCurrentImgType = JSON.parse(localStorage.getItem("currentImgType"));

  //data to grab to the backend
  //-> photo OR savedImgData(for uploaded images)
  //-> formdata

  useEffect(() => {
    // localStorage.setItem("currentImgType", JSON.stringify("camera"));
    if (getCurrentImgType === "camera") {
      const cameraImg = localStorage.getItem("takenPhotoUrl");
      if (cameraImg !== null) setPhoto(JSON.parse(cameraImg));

    } else if (getCurrentImgType === "persisted-upload") {
      setImgDataDisplay(true);
      const uploadedImg = localStorage.getItem("uploadedPhotoUrl");

      if (uploadedImg !== null) setSavedImgData(JSON.parse(uploadedImg));
    }

    //this is the data for the persisted data on the form
    const persistedFormData = localStorage.getItem("upload-details");
    if (persistedFormData !== null) setFormData(JSON.parse(persistedFormData));
  }, []);

  // console.log(savedImgData)
  //click function that opens the drawer
  function handleOpen() {
    setOpen(!open);
  }

  //function that handles camera images
  const handleTakePhoto = (dataUri) => {
    if (dataUri) {
      setPhoto(dataUri);
      setUseCamera(false);
      setRetakePic(true);
      setSwitchImg("camera");

      // console.log(dataUri)
      localStorage.setItem("currentImgType", JSON.stringify("camera"));
      localStorage.setItem("takenPhotoUrl", JSON.stringify(dataUri));
    }
  };

  //function handles upload images!!
  const onUploadChange = (imageList, addUpdateIndex) => {
    // data for submit
    const uploadedImgUrl = imageList[0].data_url;
    const index = addUpdateIndex;

    setUploadedImages(imageList);
    setSwitchImg("upload");
    setReupload(true);

    localStorage.setItem("currentImgType", JSON.stringify("persisted-upload"));
    localStorage.setItem(
      "uploadedPhotoUrl",
      JSON.stringify(uploadedImgUrl, index)
    );
    setImgDataDisplay(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const isDisabled = Object.values(formData).some(value => value === "")

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("upload-details", JSON.stringify(formData));
    router.back()

    //pls dont delete this, it would be utilized later on
    // var allData = ({...formData, saved_img: null })

    // if(getCurrentImgType === 'camera'){
    //    allData = ({...formData, saved_img: photo })
    // }
    // else if(getCurrentImgType === 'persisted-upload'){
    //    allData = ({...formData, saved_img: savedImgData })
    // }
    // console.log(allData)
    // localStorage.setItem('all-details', JSON.stringify(allData))
  };

  return (
    <MobileLayout title="Inspection Stage" backgroundColor={"#000"}>
      {useCamera ? (
        <Div>
          <Box
            sx={{
              m: 1,
              display: "block",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              cursor: "pointer",
              color: "#111",
              textALign: "center",
              '&:hover': {
                backgroundColor: "#ddad",
              }
            }}
            onClick={() => setUseCamera(false)}
          >
            <CloseIcon sx={{display:'block', margin: '8px auto'}}/>
          </Box>

          <Camera onTakePhoto={handleTakePhoto} isMaxResolution={true} />
        </Div>
      ) : (
        <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
          <SubNavBar header="Inspection Stage" />
          <Form onSubmit={handleSubmit}>
            <div className="px-4">
              <div>
                <div className="py-3">
                  <div className="small fw-bold mb-1">Upload Stage</div>
                  {getCurrentImgType === "persisted-upload" && (
                    <img
                      src={savedImgData || placeholderImg}
                      alt="persisted-img"
                      style={{
                        display: `${imgDataDisplay ? "block" : "none"}`,
                        width: "100%",
                        height: "240px",
                        objectFit: "fill",
                      }}
                    />
                  )}

                  <ImageUploading
                    multiple={true}
                    value={uploadedImages}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg", "png"]}
                  >
                    {({ imageList }) =>
                      // write your building UI
                      switchImg === "upload" && (
                        <div className="upload__image-wrapper">
                          {imageList.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image.data_url}
                                alt="upload"
                                style={{
                                  width: "100%",
                                  height: "240px",
                                  objectFit: "fill",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )
                    }
                  </ImageUploading>

                  {getCurrentImgType === null && (
                    <img
                      src={placeholderImg}
                      alt="camera"
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "fill",
                      }}
                    />
                  )}


                  {getCurrentImgType === "camera" && (
                    <img
                      src={photo || placeholderImg}
                      alt="camera"
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "fill",
                      }}
                    />
                  )}

                  <Grid container sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                      {getCurrentImgType === "camera" && (
                        <Button
                          onClick={() => setUseCamera(true)}
                          sx={{
                            display: `${retakePic ? "block" : "none"}`,
                            color: "#243773",
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          Retake <ReplayIcon />
                        </Button>
                      )}
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        onClick={handleOpen}
                        sx={{
                          color: "#243773",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        Add Image +
                      </Button>
                    </Grid>
                  </Grid>
                </div>

                <div className="pt-2">
                  <div
                    className="small fw-bold"
                    style={{ textTransform: "uppercase" }}
                  >
                    Add Heading
                  </div>
                  <TextareaAutosize
                    aria-label="heading"
                    placeholder="Type Here"
                    name="heading"
                    value={formData.heading}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      outline: "0",
                      resize: "none",
                      marginTop: "10px",
                      padding: "0 0 20px",
                      border: "none",
                      borderBottom: "1px solid #DEDEDE",
                    }}
                  />
                </div>
                <div className="py-4">
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
                      marginTop: "10px",
                      padding: "0 0 50px",
                      border: "none",
                      borderBottom: "1px solid #DEDEDE",
                    }}
                  />
                </div>
              </div>

              <div className="mb-4" style={{ width: "100%" }}>
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
                      disabled={isDisabled}
                      type="submit"
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
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <Drawer
                anchor={"bottom"}
                open={open}
                onClose={() => setOpen(false)}
              >
                <div className="p-4">
                  <div className="small fw-bold pb-5">Add image </div>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "100px",
                      my: 9,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <ImageUploading
                        multiple={true}
                        value={uploadedImages}
                        onChange={onUploadChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                        acceptType={["jpg", "png"]}
                      >
                        {({ imageList, onImageUpload, onImageUpdate }) => (
                          <div>
                            {reUpload === false && (
                              <Button
                                onClick={() => {
                                  onImageUpload();
                                  setSwitchImg("upload");
                                }}
                                variant="contained"
                                sx={{
                                  display: "flex",
                                  mb: 1,
                                  minWidth: 0,
                                  borderRadius: "50%",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <CloudUploadOutlinedIcon />
                              </Button>
                            )}
                            {imageList.map((image, index) => (
                              <div key={index}>
                                {reUpload && (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                    }}
                                  >
                                    <Button
                                      onClick={() => onImageUpdate(index)}
                                      variant="contained"
                                      sx={{
                                        display: "flex",
                                        mb: 1,
                                        minWidth: 0,
                                        borderRadius: "50%",
                                        height: "40px",
                                        width: "40px",
                                      }}
                                    >
                                      <ReplayIcon />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                      <Typography sx={{ fontWeight: 500 }}>
                        {reUpload ? "Upload Again" : "Upload Image"}
                      </Typography>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setOpen(false);
                          setUseCamera(true);
                        }}
                        variant="contained"
                        sx={{
                          display: "flex",
                          mb: 1,
                          minWidth: 0,
                          borderRadius: "50%",
                          height: "40px",
                          width: "40px",
                        }}
                      >
                        <AddAPhotoOutlinedIcon />
                      </Button>
                      <Typography sx={{ fontWeight: 500 }}>
                        Take Photo
                      </Typography>
                    </div>
                  </Box>
                </div>
              </Drawer>
            </div>
          </Form>
        </Box>
      )}
    </MobileLayout>
  );
}
