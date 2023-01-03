import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import CarItem from "../../src/components/CarItem";
import {Cars} from "../../src/utils/temp-data";
import TopNavBar from "../../src/components/TopNavBar";

export default function HomeIndex() {
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
       <InspectionLayout title="inspection home page" backgroundColor={'#000'} topbar={<TopNavBar/>}>
           <div className="p-2">
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
                           Old
                       </Button>
                   </Grid>
               </Grid>
           </div>
           <div className="px-3 py-2">
               {
                   cars.map(item => (
                       <div className="mb-1" key={Math.random()}>
                           <CarItem link={`/home/${item.id}`} image_url={item.image} address={item.description} make={item.make} date={item.date} />
                       </div>
                   ))
               }
           </div>
       </InspectionLayout>
    )
}
