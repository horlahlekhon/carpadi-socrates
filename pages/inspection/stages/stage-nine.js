import React, { useState, useEffect } from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextareaAutosize} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import Boxes from '../../../src/components/Boxes';
import {road_test_findings_two} from '../../../src/utils/temp-data'
import { useRouter } from 'next/router';



export default function StageNine() {
    const router = useRouter();
    const [roadTest, setRoadTest] = useState(road_test_findings_two)
    const [selectedRoadId, setSelectedRoadId] = useState(null);


    useEffect(() => {
        setRoadTest(roadTest)
      }, [roadTest])


     //this function display the previous button for each car part
     function displayPreview(id){
        // if the part id is not equal to selectedid, then set the value to current id
        setSelectedRoadId(id !== selectedRoadId ? id : null)
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
                    <Button onClick={() => router.push('/inspection/stages/upload-image')} sx={{mt:2, color: "#243773", fontWeight: 500, fontSize: '12px'}}>Add Image  +</Button>
                    </Grid>
                </Grid>
    
             <div className="py-3">
                <div className="small fw-bold">Road Test Findings</div>
                    {
                        roadTest.map((carRoadTest) => (
                            <div key={carRoadTest.id}>
                                <Grid container sx={{mt: 2, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px'}}>
                                    <Grid item xs={8}>
                                        <Typography onClick={() => displayPreview(carRoadTest.id)} sx={{fontWeight: 400, fontSize: "16px",cursor: 'pointer'}}>{carRoadTest.name}</Typography>
                                    </Grid>
                                    <Boxes />  
                                </Grid>
                                <Box item xs={4} sx={{ display: `${selectedRoadId === carRoadTest.id ? 'flex' : 'none'}`, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.16)', padding: '8px', alignItems: 'center', justifyContent: 'flex-end' }} >
                                    <Box onClick={() => router.push('/inspection/stages/upload-stage')} sx={{ color: '#243773', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Preview</Box>
                                </Box>
                            </div>
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
                            <Button onClick={() => router.back()} variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Back
                            </Button>
                        </div>

                        <div className="col-7">
                            <Button onClick={() => router.push('/inspection/stages/stage-ten')} variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
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
