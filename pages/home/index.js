import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import CarItem from "../../src/components/CarItem";
import {Cars} from "../../src/utils/temp-data";
import TopNavBar from "../../src/components/TopNavBar";
import { useRouter } from "next/router";


export default function HomeIndex() {
    const router = useRouter();
    const [buttonSelect, setButtonSelect] = useState('new');
    const [cars, setCars] = useState(() => Cars.filter(car => car.type === buttonSelect));

    const handleButtonSelect = (value) => {
        setButtonSelect(value);
        setCars(() => Cars.filter(car => car.type === value))
    };
    
    useEffect(() => {
        setCars(cars);
    }, [cars, buttonSelect]);

    return(
       <InspectionLayout activeNav={0} title="inspection home page" backgroundColor={'#000'} topbar={<TopNavBar/>}>
           <div className="p-2 border-bottom">
               <Grid container spacing={2} sx={{mb: 1}}>
                   <Grid item xs={6}>
                       <Button
                           onClick={() => handleButtonSelect('new')}
                           variant={buttonSelect==='new'? 'contained':'text'}
                           fullWidth
                           sx={{
                               borderRadius: 5,
                               textTransform: "none",
                           }}
                       >
                           New
                       </Button>
                   </Grid>
                   <Grid item xs={6}>
                       <Button
                           onClick={() => handleButtonSelect('old')}
                           variant={buttonSelect==='old'? 'contained':'text'}
                           fullWidth
                           sx={{
                              borderRadius: 5,
                              textTransform: "none",
                           }}
                       >
                           Ongoing
                       </Button>
                   </Grid>
               </Grid>
           </div>
           <div className="px-3 py-2">
               {
                   cars.map(item => (
                       <div className="mb-4" key={Math.random()}>
                           <CarItem carLink={`/home/${item.id}`} image_url={item.image} address={item.description} model={item.model} date={item.date} button_text={buttonSelect=='old' ? 'Continue' : 'View Details'} />
                       </div>
                   ))
               }
           </div>
       </InspectionLayout>
    )
}
