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

const Div = styled.div`
  display: flex;
  justify-content: center;
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
  const [ext, setExt] = useState(exterior);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const [retakePic, setRetakePic] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [switchImg, setSwitchImg] = useState("camera");
  const [reUpload, setReupload] = useState(false);

  useEffect(() => {
    setExt(ext);
  }, [ext]);

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
    }
  };

  //function handles upload images!!
  const onUploadChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setUploadedImages(imageList);
    setSwitchImg("upload");
    setReupload(true);
  };

  return (
    <MobileLayout title="Inspection Stage" backgroundColor={"#000"}>
      {useCamera ? (
        <Div>
          <Camera onTakePhoto={handleTakePhoto} isMaxResolution={true} />
        </Div>
      ) : (
        <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
          <SubNavBar header="Inspection Stage" />
          <div className="px-4">
            <div>
              <div className="py-3">
                <div className="small fw-bold mb-1">Upload Stage</div>
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
                              alt=""
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

                {switchImg === "camera" && (
                  <img
                    src={photo || placeholderImg}
                    alt="upload"
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "fill",
                    }}
                  />
                )}

                <Grid container sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    {switchImg === "camera" && (
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
                  aria-label="review"
                  placeholder="Type Here"
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
                              onClick={onImageUpload}
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
                    <Typography sx={{ fontWeight: 500 }}>Take Photo</Typography>
                  </div>
                </Box>
              </div>
            </Drawer>
          </div>
        </Box>
      )}
    </MobileLayout>
  );
}
