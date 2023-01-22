import React, {useEffect, useState} from "react";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import CarItem from "../../src/components/CarItem";
import {Cars} from "../../src/utils/temp-data";
import TopNavBar from "../../src/components/TopNavBar";

export default function InspectionIndex() {
    const [cars, setCars] = useState(Cars);

    useEffect(() => {
        setCars(cars);
    }, [cars]);
    
    return(
        <InspectionLayout activeNav={1} title="inspection home page" backgroundColor={'#000'} topbar={<TopNavBar/>}>
            <div className="p-2">
                <div className="small fw-bold">Inspected</div>
            </div>
            <div className="px-3 py-2">
                {
                    cars.map(item => (
                        <div className="mb-4" key={Math.random()}>
                            <CarItem carLink={`/inspection/${item.id}`} image_url={item.image} address={item.description} model={item.model} date={item.date} button_text='View Details' />
                        </div>
                    ))
                }
            </div>
        </InspectionLayout>
    )
}
