import { useCallback } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
    overflow: visible;
    margin-top: 6px;
    display: inline-block;
`;

import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { pushPulse } from 'slices/pulseSlice';
import { generateUUID } from 'src/utils/general';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
        }
    }
}

//Create typescript componente BoxCard with children prop
export default function BoxCard({ children, onClick, sx }: { children: React.ReactNode, onClick?: () => void, sx?: any }) {

    const dispatch = useDispatch();

    //create useCallback boxEndTouch with event
    const boxEndTouch = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //create const id with generateId
        const id = generateUUID();
        //create const x with event.clientX
        const x = event.clientX;
        //create const y with event.clientY
        const y = event.clientY;
        //create const width with event.currentTarget.clientWidth
        const width = event.currentTarget.clientWidth;
        //create const height with event.currentTarget.clientHeight
        const height = event.currentTarget.clientHeight;
        //create const pulse with { id, x, y, width, height }
        const pulse = { id, x, y, width, height };
        //dispatch pushPulse with pulse
        dispatch(pushPulse(pulse) as any);
        //if onClick
        if (onClick) {
            //onClick
            onClick();
        }
    }, [dispatch, onClick]);

    return (
        <motion.div
            variants={container}
            initial="hidden"
            onClick={boxEndTouch}
            animate="show"
            style={{ position: 'relative', ...sx }}
            >
            {children}
        </motion.div>
    );
}
