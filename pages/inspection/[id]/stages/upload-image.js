import React, { useState, useEffect } from "react";
import MobileLayout from "../../../../src/layouts/MobileLayout";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import SubNavBar from "../../../../src/components/SubNavBar";
import { exterior } from "../../../../src/utils/temp-data";
import { useRouter } from "next/router";

//component to be added to the DOM
const UploadComponent = () => {
  let inputRef;

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 2,
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
        padding: "8px",
      }}
    >
      <input
        type="file"
        ref={(refParam) => (inputRef = refParam)}
        hidden={true}
      />
      <Grid item xs={8}>
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          Upload image
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          lineHeight: "1.2",
          display: "flex",
          gap: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => inputRef.click()}
          variant="outlined"
          size="small"
          sx={{
            px: 3,
            textTransform: "none",
            py: 0.5,
            borderRadius: 3,
            fontSize: 12,
          }}
        >
          Upload
        </Button>
      </Grid>
    </Grid>
  );
};

export default function UploadImage() {
  let inputRef;
  const router = useRouter();
  const [ext, setExt] = useState(exterior);
  const [open, setOpen] = useState(false);
  const [uploadList, setUploadList] = useState([]);

  useEffect(() => {
    setExt(ext);
  }, [ext]);

  // buton to add new element to the DOM
  const onAddBtnClick = (event) => {
    setUploadList(
      uploadList.concat(<UploadComponent key={uploadList.length} />)
    );
  };

  return (
    <MobileLayout title="Inspection Upload Image" backgroundColor={"#000"}>
      <Box sx={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <SubNavBar header="Inspection Upload Image" />
        <div className="px-4">
          <div>
            <input
              type="file"
              ref={(refParam) => (inputRef = refParam)}
              hidden={true}
            />
            <div className="py-3">
              <div className="small fw-bold mb-1">Upload Images</div>
              <img
                src="/images/default_upload.png"
                alt="upload"
                style={{ width: "100%" }}
              />
              <Grid container sx={{ mt: 2 }}>
                <Grid
                  item
                  xs={8}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ fontWeight: 300, fontSize: 14 }}>
                    Kindly upload images shown above
                  </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    onClick={onAddBtnClick}
                    sx={{ color: "#243773", fontWeight: 500, fontSize: "12px" }}
                  >
                    Add Image +
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                padding: "8px",
              }}
            >
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Upload image
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  lineHeight: "1.2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={() => inputRef.click()}
                  variant="outlined"
                  size="small"
                  sx={{
                    px: 3,
                    textTransform: "none",
                    py: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                padding: "8px",
              }}
            >
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Upload image
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  lineHeight: "1.2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={() => inputRef.click()}
                  variant="outlined"
                  size="small"
                  sx={{
                    px: 3,
                    textTransform: "none",
                    py: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                padding: "8px",
              }}
            >
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Upload image
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  lineHeight: "1.2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={() => inputRef.click()}
                  variant="outlined"
                  size="small"
                  sx={{
                    px: 3,
                    textTransform: "none",
                    py: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                padding: "8px",
              }}
            >
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Upload image
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  lineHeight: "1.2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={() => inputRef.click()}
                  variant="outlined"
                  size="small"
                  sx={{
                    px: 3,
                    textTransform: "none",
                    py: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)",
                padding: "8px",
              }}
            >
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  Upload image
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  lineHeight: "1.2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onClick={() => inputRef.click()}
                  variant="outlined"
                  size="small"
                  sx={{
                    px: 3,
                    textTransform: "none",
                    py: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            {uploadList}

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
          {/* <Drawer anchor={"bottom"} open={open} 
                    onClose={() => setOpen(false)}>
                    <div className='p-4'>
                    <div className="small fw-bold pb-5">Add image </div>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px', my: 9 }}>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                            <Button onClick={() => inputRef.click()} variant="contained" sx={{display:'flex',mb:1, minWidth:0, borderRadius: '50%', height: '40px',width: '40px'}}>
                                <CloudUploadOutlinedIcon/>
                            </Button>
                            <Typography sx={{fontWeight: 500}}>Upload Image</Typography>
                        </div>

                        <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                            <Button variant="contained" sx={{display:'flex',mb:1, minWidth:0, borderRadius: '50%', height: '40px',width: '40px'}}>
                                <AddAPhotoOutlinedIcon/>
                            </Button>
                            <Typography sx={{fontWeight: 500}}>Take Photo</Typography>
                        </div>
                    </Box>
                    </div>
                
                </Drawer> */}
        </div>
      </Box>
    </MobileLayout>
  );
}
