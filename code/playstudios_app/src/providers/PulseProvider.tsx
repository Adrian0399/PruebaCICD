import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Pulse, removePulseAction } from 'slices/pulseSlice';
import { RootState } from "src/store";

//Create react provider PulseProvider, draw div in document after children
export default function PulseProvider({ children }: { children: React.ReactNode }) {

  const { pulses } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();


  //return chindren and div with pulseRef
  return (
    <>
      {pulses?.pulses.map((pulse: Pulse) => (
        <motion.div key={pulse.id} id={pulse.id}
          className="box"
          initial={{
            opacity: 0, scale: 0,
            display: 'block',
            left: "calc(" + pulse.x + "px - 35px)",
            top: "calc(" + pulse.y + "px - 35px)",
            position: 'fixed',
            zIndex: 99999999,
            width: 70,
            height: 70,
            borderRadius: '100%',
            border: '.7px solid #000',
            boxShadow: '0 0 3px 0px #000, inset 0 0 3px 0px #000'
          }}
          animate={{ opacity: [1, 0.5, 0], scale: [0, 1.8, 2] }}
          transition={{ duration: 0.8, type: 'spring' }}
          onAnimationComplete={() => {
            dispatch(removePulseAction(pulse) as any);
          }}
        />

      ))}
      {children}
    </>
  );
}