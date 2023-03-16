import { useEffect, useState } from "react";


// Define general type for useWindowSize hook, which includes width and height
export interface Size {
    width: number | undefined;
    height: number | undefined;
}

//Create hook useWindowSize in typescript
export default function useWindowSize() {
    //create const [windowSize, setWindowSize] with useState
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    } as Size);
    //create useEffect with windowSize
    useEffect(() => {
        //create function handleResize
        function handleResize() {
            //setWindowSize with window.innerWidth and window.innerHeight
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            } as Size);
        }
        //add event listener to window
        window.addEventListener("resize", handleResize);
        //call handleResize
        handleResize();
        //remove event listener to window
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //return windowSize
    return windowSize;
}
