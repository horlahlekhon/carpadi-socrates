import React from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid, TextField} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useRouter } from 'next/router';


export default function StageOne() {
    // const router = useRouter();
    // const id = router.query.id;

  return (
    <MobileLayout title="Inspection Stage 1" backgroundColor={'#000'}>
     <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
       <SubNavBar header='Inspection Stage 1'/>
      <div className='px-4'>
        <div>
          <div className="py-2">
            <div className="small fw-bold">Inspector's Details</div>
        
        <Grid container sx={{mt: 2}}>
            <Grid item xs={5}>
                <Typography sx={{fontWeight: 400, fontSize: "16px",}}>Inspector’s Name</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Inspection Date</Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField sx={{boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Jhon Do Smith" />
              <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="June 12 | 2020" />
             </Grid>
        </Grid>
        </div>
        <div className="py-2">
            <div className="small fw-bold">Vehicle Informations</div>
        
            <Grid container sx={{mt: 2}}>
                <Grid item xs={5}>
                    <Typography sx={{fontWeight: 400, fontSize: "16px",}}>Owner’s Name</Typography>
                    <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Year</Typography>
                    <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Brand</Typography>
                    <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Model</Typography>
                    <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Mileage</Typography>
                    <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>VIN</Typography>
                </Grid>
                <Grid item xs={7}>
                <TextField sx={{boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Yusuf Adebayo" />
                <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="2015" />
                <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Toyota" />
                <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="Camry" />
                <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="18,000" />
                <TextField sx={{mt: 3, boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)", px:1}} id="standard-basic" variant="standard" placeholder="BC83891899837" />
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
                            <Button href='/home' variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Back
                            </Button>
                        </div>

                        <div className="col-7">
                            <Button href='/inspection/stages/stage-two' variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
                                color: '#fff',
                              },}}>
                                Save & Continue
                            </Button>
                        </div>
                    </div>
                </div>
       </div>

        </div>
    </Box>
</MobileLayout>
  )
}
