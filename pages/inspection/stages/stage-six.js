import React, { useState, useEffect } from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import {under_hood_two, interior_one} from '../../../src/utils/temp-data'
import Drawer from '@mui/material/Drawer';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useRouter } from 'next/router';


export default function StageSix() {
    const router = useRouter();
    const [interiorOne, setInteriorOne] = useState(interior_one)
    const [underHoodTwo, setUnderHoodTwo] = useState(under_hood_two)
    const [selectedBox, setSelectedBox] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIntId, setSelectedIntId] = useState(null);
    const [selectedHoodId, setSelectedHoodId] = useState(null);

    useEffect(() => {
        setInteriorOne(interiorOne)
        setUnderHoodTwo(underHoodTwo)
      }, [interiorOne, underHoodTwo])


    const handleClick = (box) => {
        setSelectedBox(box);
      };

    //click function that opens the drawer
    function handleOpen() {
        setOpen(!open);
    }

     //this function display the previous button for each car part
     function displayPreview(id){
        // if the part id is not equal to selectedid, then set the value to current id
        setSelectedHoodId(id !== selectedHoodId ? id : null)
    }

     //this function display the previous button for each car part
     function displayPreviewTwo(id){
        // if the part id is not equal to selectedid, then set the value to current id
        setSelectedIntId(id !== selectedIntId ? id : null)
    }
    
     



  return (  
    <MobileLayout title="Inspection Stage 6" backgroundColor={'#000'}>
    <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
      <SubNavBar header='Inspection Stage 6'/>
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
            <div className="small fw-bold">Underbody </div>
                {
                    underHoodTwo.map((carHood) => (
                        <div key={carHood.id}>
                        <Grid container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                        <Grid item xs={8}>
                            <Typography onClick={() => displayPreview(carHood.id)} sx={{fontWeight: 400, fontSize: "16px", cursor:'pointer'}}>{carHood.name}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ml: 0, display:'flex', gap: 1, justifyContent: 'flex-end'}}>
                            <Box onClick={() => handleClick('box1')} sx={{width: 21, textAlign:'center', color: '#BCFFDB', background:'#439F6E',opacity: `${selectedBox === 'box1' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>G</Box>
                            <Box onClick={() => handleClick('box2')} sx={{width: 21, textAlign:'center', color: '#FFEBA5', background:'#FFB82E',opacity: `${selectedBox === 'box2' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>F</Box>
                            <Box onClick={() => handleClick('box3')} sx={{width: 21, textAlign:'center', color: '#FFC1C1;', background: '#F93232',opacity: `${selectedBox === 'box3' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>P</Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{display: `${selectedHoodId === carHood.id ? 'flex' : 'none'}`, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                        <Grid item xs={8}>
                           <Typography sx={{fontWeight: 400, fontSize: "16px",}}>IMG-0238377</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ml: 0, display:'flex', alignItems:'center', justifyContent: 'flex-end'}}>
                        <Box onClick={() => router.push('/inspection/stages/upload-stage')} sx={{color: '#243773', fontSize:'12px',fontWeight:600, cursor: 'pointer'}}>Preview</Box>
                        </Grid>
                    </Grid>
                    </div>
                    ))
                }
             </div>
             <div className="py-3">
                <div className="small fw-bold">Underhood</div>
                    {
                        interiorOne.map((carInterior) => (
                            <div key={carInterior.id}>
                                <Grid container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                                    <Grid item xs={8}>
                                        <Typography onClick={() => displayPreviewTwo(carInterior.id)} sx={{fontWeight: 400, fontSize: "16px", cursor: 'pointer'}}>{carInterior.name}</Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ml: 0, display:'flex', gap: 1, justifyContent: 'flex-end'}}>
                                    <Box onClick={() => handleClick('box1')} sx={{width: 21, textAlign:'center', color: '#BCFFDB', background:'#439F6E',opacity: `${selectedBox === 'box1' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>G</Box>
                                    <Box onClick={() => handleClick('box2')} sx={{width: 21, textAlign:'center', color: '#FFEBA5', background:'#FFB82E',opacity: `${selectedBox === 'box2' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>F</Box>
                                    <Box onClick={() => handleClick('box3')} sx={{width: 21, textAlign:'center', color: '#FFC1C1;', background: '#F93232',opacity: `${selectedBox === 'box3' ? '1' : '0.2'}`,borderRadius: '2px', cursor: 'pointer'}}>P</Box>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{display: `${selectedIntId === carInterior.id ? 'flex' : 'none'}`, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                                    <Grid item xs={8}>
                                            <Typography sx={{fontWeight: 400, fontSize: "16px",}}>IMG-0238377</Typography>
                                        </Grid>
                                    <Grid item xs={4} sx={{ml: 0, display:'flex', alignItems:'center', justifyContent: 'flex-end'}}>
                                    <Box onClick={() => router.push('/inspection/stages/upload-stage')} sx={{color: '#243773', fontSize:'12px',fontWeight:600, cursor: 'pointer'}}>Preview</Box>
                                    </Grid>
                                </Grid>
                            </div>
                        ))
                    }
                    
                </div>


                <div className="mt-5 mb-4" style={{width: '100%'}}>
                   <div className="row">
                       <div className="col-5 px-1">
                           <Button onClick={() => router.back()} variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                               Back
                           </Button>
                       </div>

                       <div className="col-7">
                           <Button onClick={() => router.push('/inspection/stages/stage-seven')} variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
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
                            <Button onClick={() => router.push('/inspection/stages/upload-image')} variant="contained" sx={{display:'flex',mb:1, minWidth:0, borderRadius: '50%', height: '40px',width: '40px'}}>
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
