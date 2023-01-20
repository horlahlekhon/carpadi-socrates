import React, { useState, useEffect } from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextField, TextareaAutosize} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import {exterior} from '../../../src/utils/temp-data'
import Drawer from '@mui/material/Drawer';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';



export default function UploadStage() {
    const [ext, setExt] = useState(exterior)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setExt(ext)
      }, [ext])


    //click function that opens the drawer
    function handleOpen() {
        setOpen(!open);
    }

    
     

  return (
    <MobileLayout title="Inspection Stage" backgroundColor={'#000'}>
    <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
      <SubNavBar header='Inspection Stage'/>
     <div className='px-4'>
     <div style={{height: "90vh"}}>
       
       <div className="py-3">
            <div className="small fw-bold mb-1">Upload Stage</div>
            <img src="/images/sample/car-detail_big.png" alt="upload" style={{width: '100%'}} />
                <Grid container sx={{mt: 2}}>
                        <Grid item xs={8} sx={{display:'flex', alignItems:'center'}}>
                        </Grid>
                        <Grid item xs={4}>
                        <Button onClick={handleOpen} sx={{color: "#243773", fontWeight: 500, fontSize: '12px'}}>Add Image  +</Button>
                        </Grid>
                </Grid>
       </div>     
           
            <div className="pt-2">
                <div className="small fw-bold" style={{textTransform: 'uppercase'}}>Add Heading</div>
                <TextareaAutosize
                    aria-label="review"
                    placeholder="Type Here"
                    style={{ width: "100%",outline: "0", resize: "none", marginTop: '10px', padding:"0 0 20px", border: "none", borderBottom: "1px solid #DEDEDE" }}
                />   
            </div>
            <div className="py-4">
                <div className="small fw-bold" style={{textTransform: 'uppercase'}}>Review</div>
                <TextareaAutosize
                    aria-label="review"
                    placeholder="Type Here"
                    style={{ width: "100%",outline: "0", resize: "none", marginTop: '10px', padding:"0 0 50px", border: "none", borderBottom: "1px solid #DEDEDE" }}
                />   
            </div>
       </div>


             <div className="mb-4" style={{width: '100%'}}>
                   <div className="row">
                       <div className="col-5 px-1">
                           <Button href='/inspection/stages/upload-image' variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                               Back
                           </Button>
                       </div>

                       <div className="col-7">
                           <Button href='' variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
                                color: '#fff',
                              },}}>
                               Save
                           </Button>
                       </div>
                   </div>
               </div>
                <Drawer anchor={"bottom"} open={open} 
                    onClose={() => setOpen(false)}>
                    <div className='p-4'>
                    <div className="small fw-bold pb-5">Add image </div>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px', my: 9 }}>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                            <Button href='/inspection/stages/upload-stage' variant="contained" sx={{display:'flex',mb:1, minWidth:0, borderRadius: '50%', height: '40px',width: '40px'}}>
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
                
                </Drawer>
    </div>
   </Box>
</MobileLayout>
  )
}
