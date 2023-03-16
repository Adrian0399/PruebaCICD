//Create page component panel purchase with props children
//Compare this snippet from code\playstudios_app\src\pages\auth\Purchase\Flow\index.tsx:

import { useCallback, useState } from 'react';

import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import Label from 'src/components/label';
import Panel from 'src/components/panel';
import PriceTag from 'src/components/price-tag';


//component props callback close 
export default function InitPurchaseFlow({ onOk, onCancel, onClose  }: { onOk?: () => void, onCancel?: () => void, onClose?: () => void }) {
    //define state with useState
    const [conditions, setConditions] = useState(false);

    //useCallback function buttons ok and cancel
    const handleOk = useCallback(() => {
        //if onClose is true call onClose
        if (onOk) {
            onOk();
        }
    }, [onOk]);

    const handleCancel = useCallback(() => {
        //if onClose is true call onClose
        if (onCancel) {
            onCancel();
        }
    }, [onCancel]);


    const handleClose = useCallback(() => {
        //if onClose is true call onClose
        if (onClose) {
            onClose();
        }
    }, [onClose]);


    //useCallback function check conditions
    const handleConditions = useCallback(() => {
        setConditions(!conditions);
    }, [conditions]);

    return (
        <Panel header="Confirm Purchase" variant="modal" onClose={() => handleClose()}>
            <Grid container spacing="12">
                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Label variant="H3_SB">25% Off Room Rate</Label>
                    <Label variant="H3_R" color='secondary'>Bellagio Resort and Casino</Label>
                </Grid>
                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <PriceTag variant='detail' value={345345345} />
                </Grid>
                <Grid item xs={12} sx={{ flexGrow: 1 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={conditions} onChange={handleConditions} />} label={<Label variant="H4_R">I have read and agree to all terms and conditions</Label>} />
                    </FormGroup>
                </Grid>

                <Grid item xs={12} ></Grid>
                <Grid item xs={6} >
                    <Button variant="secondary" onClick={() => handleCancel()} fullWidth>
                        <Typography variant="button" component="div">
                            Cancel
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={6} >
                    <Button variant="primary" fullWidth onClick={() => handleOk()} disabled={!conditions}>
                        <Typography variant="button" component="div">
                            Purchase
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Panel>
    )
}