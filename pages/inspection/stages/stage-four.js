import React, { useState, useEffect } from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextField} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import Boxes from '../../../src/components/Boxes';
import {glass, tyres_and_wheels} from '../../../src/utils/temp-data'
import { useRouter } from 'next/router';

export default function StageFour() {
    const router = useRouter();
    const [gl, setGl] = useState(glass)
    const [tw, setTw] = useState(tyres_and_wheels)
    const [selectedGlId, setSelectedGlId] = useState(null);
    const [selectedTwId, setSelectedTwId] = useState(null);

    useEffect(() => {
        setGl(gl)
        setTw(tw)
      }, [gl, tw])

    
    //this function display the previous button for each car part
    function displayPreview(id){
        // if the part id is not equal to selectedid, then set the value to current id
        setSelectedGlId(id !== selectedGlId ? id : null)
    }

    //this function display the previous button for each car part
    function displayPreviewTwo(id){
        // if the part id is not equal to selectedid, then set the value to current id
        setSelectedTwId(id !== selectedTwId ? id : null)
    }



  return (  
    <MobileLayout title="Inspection Stage 4" backgroundColor={'#000'}>
    <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
      <SubNavBar header='Inspection Stage 4'/>
     <div className='px-4'>
            <Grid container sx={{mt: 2}}>
                <Grid item xs={9}>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#439F6E'}}>G=Good</Typography>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#FFB82E'}}>F=Fair</Typography>
                    <Typography sx={{fontWeight: '500', fontSize: '14px', color: '#F93232'}}>P=Poor</Typography>
                </Grid>
                    <Grid item xs={3}>
                    <Button onClick={() => router.push('/inspection/stages/upload-image')} sx={{mt:2, color: "#243773", fontWeight: 500, fontSize: '12px'}}>Add Image  +</Button>
                    </Grid>
                </Grid>
        
        <div className="py-3">
            <div className="small fw-bold">Glass</div>
                {
                    gl.map((carGlass) => (
                        <div key={carGlass.id} >
                            <Grid container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                            <Grid item xs={8}>
                                <Typography onClick={() => displayPreview(carGlass.id)} sx={{fontWeight: 400, fontSize: "16px", cursor: 'pointer'}}>{carGlass.name}</Typography>
                            </Grid>
                            <Boxes />   
                        </Grid>
                        <Box item xs={4} sx={{ display: `${selectedGlId === carGlass.id ? 'flex' : 'none'}`, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px', alignItems: 'center', justifyContent: 'flex-end' }} >
                            <Box onClick={() => router.push('/inspection/stages/upload-stage')} sx={{ color: '#243773', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Preview</Box>
                        </Box>
                    </div>
                    
                    ))
                }
             </div>
             <div className="py-3">
                <div className="small fw-bold">Tyers and wheels</div>
                    {
                        tw.map((carTyresAndWheels) => (
                            <div key={carTyresAndWheels.id}>
                            <Grid  container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                                <Grid item xs={8}>
                                    <Typography onClick={() => displayPreviewTwo(carTyresAndWheels.id)} sx={{fontWeight: 400, fontSize: "16px", cursor: 'pointer'}}>{carTyresAndWheels.name}</Typography>
                                </Grid>
                                <Boxes />     
                        </Grid>
                        <Box item xs={4} sx={{ display: `${selectedTwId === carTyresAndWheels.id ? 'flex' : 'none'}`, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px', alignItems: 'center', justifyContent: 'flex-end' }} >
                            <Box onClick={() => router.push('/inspection/stages/upload-stage')} sx={{ color: '#243773', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Preview</Box>
                        </Box>
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
                            <Button onClick={() => router.push('/inspection/stages/stage-five')} variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
                                color: '#fff',
                              },}}>
                                Save & Continue
                            </Button>
                        </div>
                    </div>
                </div>

       </div>
   </Box>
</MobileLayout>
  )
}
