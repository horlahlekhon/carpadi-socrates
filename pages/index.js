import React, {useEffect, useState} from "react";
import Splash from "./splash";
import Login from "./login";

export default function Index() {
    const [showSplash, setShowSplash] = useState(true);

    const timer = () => {
        setTimeout(() => {
            setShowSplash(false);
        }, 1500)
    };

    useEffect(() => {
        timer();
    }, []);

    return showSplash? <Splash/> : <Login/>
}
