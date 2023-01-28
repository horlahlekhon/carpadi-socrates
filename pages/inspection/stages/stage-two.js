import React from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextField} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useRouter } from 'next/router';

export default function StageTwo() {
    const router = useRouter();

  return (
    <MobileLayout title="Inspection Stage 2" backgroundColor={'#000'}>
    <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
      <SubNavBar header='Inspection Stage 2'/>
     <div className='px-4'>
       <div className="py-2">
           <Grid container sx={{mt: 2}}>
               <Grid item xs={5}>
                   <Typography sx={{fontWeight: 400, fontSize: "16px",}}>Body Style</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Transmission</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Engine</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Drive Type</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Door Count</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Exterior Color</Typography>
                   <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Interrior Color</Typography>
               </Grid>
               <Grid item xs={7}>
               <TextField sx={{boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Sedan" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Automatic" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Type Here" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Type Here" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="4" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="White" />
               <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Ash" />
               </Grid>
           </Grid>
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
                           <Button onClick={() => router.push('/inspection/stages/stage-three')} variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
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
