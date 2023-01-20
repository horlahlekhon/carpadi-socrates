import React, { useState, useEffect } from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextareaAutosize} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import {road_test_findings_two} from '../../../src/utils/temp-data'
import Drawer from '@mui/material/Drawer';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export default function StageNine() {
    const [roadTest, setRoadTest] = useState(road_test_findings_two)
    const [selectedBox, setSelectedBox] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setRoadTest(roadTest)
      }, [roadTest])


    const handleClick = (box) => {
        setSelectedBox(box);
      };

    //click function that opens the drawer
    function handleOpen() {
        setOpen(!open);
    }




  return (  
    <MobileLayout title="Inspection Stage 9" backgroundColor={'#000'}>
    <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
      <SubNavBar header='Inspection Stage 9'/>
     <div className='px-4'>
            <Grid container sx={{mt: 2}}>
                <Grid item xs={9}>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#439F6E'}}>G=Good</Typography>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#FFB82E'}}>F=Fair</Typography>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#F93232'}}>P=Poor</Typography>
                </Grid>
                    <Grid item xs={3}>
                    <Button onClick={handleOpen} sx={{mt:2, color: "#243773", fontWeight: 500, fontSize: '12px'}}>Add Image  +</Button>
                    </Grid>
                </Grid>
    
             <div className="py-3">
                <div className="small fw-bold">Road Test Findings</div>
                    {
                        roadTest.map((carRoadTest) => (
                            <Grid key={carRoadTest.id} container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                            <Grid item xs={8}>
                                <Typography sx={{fontWeight: 400, fontSize: "16px",}}>{carRoadTest.name}</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ml: 0, display:'flex', gap: 1, justifyContent: 'flex-end'}}>
                            <Box onClick={() => handleClick('box1')} sx={{width: 21, textAlign:'center', color: '#BCFFDB', background:'#439F6E',opacity: `${selectedBox === 'box1' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>G</Box>
                            <Box onClick={() => handleClick('box2')} sx={{width: 21, textAlign:'center', color: '#FFEBA5', background:'#FFB82E',opacity: `${selectedBox === 'box2' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>F</Box>
                            <Box onClick={() => handleClick('box3')} sx={{width: 21, textAlign:'center', color: '#FFC1C1;', background: '#F93232',opacity: `${selectedBox === 'box3' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>P</Box>
                            </Grid>
                        </Grid>
                        ))
                    }
                    
                    </div>
                    <div className="py-5">
                        <div className="small fw-bold" style={{textTransform: 'uppercase'}}>Review</div>
                        <TextareaAutosize
                            aria-label="review"
                            placeholder="Type Here"
                            style={{ width: "100%",outline: "0", resize: "none", marginTop: '5px', padding:"0 0 50px", border: "none", borderBottom: "1px solid #DEDEDE" }}
                        />   
                    </div>

                <div className="mt-5 mb-4" style={{width: '100%'}}>
                    <div className="row">
                        <div className="col-5 px-1">
                            <Button href='/inspection/stages/stage-eight' variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Back
                            </Button>
                        </div>

                        <div className="col-7">
                            <Button href='/inspection/stages/stage-ten' variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
                                color: '#fff',
                              },}}>
                                Save & Continue
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
                                <Button href='/inspection/stages/upload-image' variant="contained" sx={{display:'flex',mb:1, minWidth:0, borderRadius: '50%', height: '40px',width: '40px'}}>
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
