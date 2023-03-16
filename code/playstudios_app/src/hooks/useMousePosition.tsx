import { useEffect, useState } from "react";

//Create hook useMousePosition with return type {x:number, y:number}
export default function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updateMousePosition = (ev: MouseEvent) => {
        setPosition({ x: ev.clientX, y: ev.clientY });
    };

    const updateTouchPosition = (ev: TouchEvent) => {
        setPosition( { x: ev.touches[0].clientX, y: ev.touches[0].clientY });
    };

    useEffect(() => {

        //add event touch move event
        window.addEventListener('touchstart', updateTouchPosition);
        window.addEventListener('touchmove', updateTouchPosition);
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('touchstart', updateTouchPosition);
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('touchmove', updateTouchPosition);
        };

    }, []);

    return position;
}
