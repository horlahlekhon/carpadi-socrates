import React from 'react'
import MobileLayout from "../../../src/layouts/MobileLayout";
import {Box, Typography, Button,Grid} from "@mui/material";
import SubNavBar from '../../../src/components/SubNavBar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { gotoStage } from '../../../src/store/reducers/stageReducer';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function InspectionPreview() {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.id;

    const data = {
        datasets: [
          {
            data: [15, 85],
            backgroundColor: [
              '#C4C4C4',
              '#243773',
            ],
            cutout: '80%',
            borderWidth:0
          },
        ],
      };


  return (
    <MobileLayout title="Inspection Preview" backgroundColor={'#000'}>
     <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
       <SubNavBar header='Preview'/>
      <div className='px-4'>
        <div>
          <div className="py-3">
            <div className="small fw-bold">Total Inspections Result</div>
        
        <Grid container sx={{mt: 3}}>
            <Grid item xs={6}>
                <Typography sx={{fontWeight: 400, fontSize: "16px",}}>Inspector’s Name</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Inspection Date</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Year</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Brand</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Model</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>Mileage</Typography>
                <Typography sx={{mt: 4, fontWeight: 400, fontSize: "16px",}}>VIN</Typography>
            </Grid>
            <Grid item xs={6}>
                {/* this will contain the inspection data from the inspection form */}
              <Typography sx={{fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>Jhon Do Smith</Typography>
              <Typography sx={{mt: 4,fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>June 12 | 2020</Typography>
              <Typography sx={{mt: 4,fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>2015</Typography>
              <Typography sx={{mt: 4, fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>Toyota</Typography>
              <Typography sx={{mt: 4, fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>Camry</Typography>
              <Typography sx={{mt: 4, fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>18,000</Typography>
              <Typography sx={{mt: 4, fontWweight: 300,fontSize: '16px', color: '#212120',opacity: 0.4,}}>BC83891899837</Typography>
             </Grid>
        </Grid>
        </div>

        <Grid container sx={{mt: 2}}>
            <Grid item xs={4}>
                <div style={{width:'90px', position:'relative'}}>
                        <Doughnut data={data}  options={{plugins: {tooltip: {enabled: false}}}} />
                        <Typography sx={{
                            width: '100%', 
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center', 
                            top: '35%', 
                            lineHeight:'19px', 
                            fontWeight: 600,
                            fontSize: '16px',
                            textAlign: 'center', 
                            zIndex: 999}}>
                            85%<br />
                            Score
                        </Typography>
                    </div>
            </Grid>
            <Grid item xs={8} sx={{mt:2}}>
            <Typography sx={{fontWeight: 600,fontSize: '18px', textTransform:'capitalize'}}>toyota 2020 camry XSE </Typography>
            <Typography sx={{fontWeight: 500,fontSize: '16px',lineHeight: '25px'}}>VIN: BC83891899837 </Typography>
            <Typography sx={{fontWeight: 500,fontSize: '14px',lineHeight: '25px'}}>Created: June 20 | 2022 </Typography>
            </Grid>
        </Grid>
        
        <Box sx={{mt:2}}>
            <img style={{width:'100%',objectFit: 'contain'}} src='/images/sample/jeep.png' alt='jeep-car'/>
            <img style={{marginTop: '20px', width:'100%',objectFit: 'contain'}} src='/images/sample/car-2.png' alt='jeep-car'/>
        </Box>
       

            <div className="mt-5 mb-4" style={{width: '100%'}}>
                    <div className="row">
                        <div className="col-5 px-1">
                            <Button onClick={() => router.back()} variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Back
                            </Button>
                        </div>

                        <div className="col-7">
                            <Button onClick={() => {
                              router.push(`/inspection/${id}/stages`)
                              dispatch(gotoStage(3))
                            }}  variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12,  '&:hover': {
                                color: '#fff',
                              },}}>
                                Next
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
