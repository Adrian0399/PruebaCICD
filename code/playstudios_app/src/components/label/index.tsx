import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const titleMotion = {
    hidden: { opacity: 0, marginLeft: 20 },
    show: {
        opacity: 1,
        marginLeft: 0
    }
}

//define props 
interface LabelProps {
    variant?: any,
    children: any,
    bottom?: number,
    top?: number,
    color?: string,
    component?: any | string

}


export default function Label({ variant, color = 'primary', children, component = 'div',  ...props }: LabelProps) {
    return (
        <motion.div
            variants={titleMotion}
            initial="hidden"
            animate="show"
            style={{
                marginBottom: props.bottom ? props.bottom : 0,
                marginTop: props.top ? props.top : 0
            }}>
            <Typography variant={variant} {...props} component={component} color={color}>
                {children}
            </Typography>
        </motion.div>

    );
}

