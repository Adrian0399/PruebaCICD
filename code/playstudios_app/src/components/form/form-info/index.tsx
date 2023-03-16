//Create typescript react componente FormInfo 
import { Divider, Grid } from '@mui/material';
import Label from 'src/components/label';

//define props FormInfo
interface FormInfoProps {
    icon: any;
    label: string;
    value: string | undefined;
    top?: boolean;
    bottom?: boolean;
    alone?: boolean;
}

//Function return border radius for top, middle, bottom
export function getBorderRadius(top: boolean, bottom: boolean, alone: boolean) {
    if (alone) {
        return "6px";
    }
    if (top) {
        return "6px 6px 0 0";
    }
    if (bottom) {
        return "0 0 6px 6px";
    }
    return "0";
}

export default function FormInfo({ icon, label, value, top = false, bottom = false, alone = false }: FormInfoProps) {
    return (
        <Grid container spacing={0} sx={{ padding: '0 16px', background: "#F6F6FB", border: "1px solid #F6F6FB", borderRadius: getBorderRadius(top, bottom, alone) }} alignItems="center">
            <Grid item xs={12} sx={{ paddingTop: '16px' }}>
                <Grid container  alignItems="center">
                    <Grid item alignContent={'center'}>
                        <img src={icon} alt={label} style={{ marginRight: "13px", width: "11.26px" }} />
                    </Grid>
                    <Grid item alignContent={'center'}>
                        <Label variant="R">{label}</Label>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Label variant="M" top={5} bottom={16}>{value}</Label>
            </Grid>
            {(!alone && !bottom) && <Grid item xs={12}><Divider variant="middle" /></Grid>}
        </Grid>
    );
}

