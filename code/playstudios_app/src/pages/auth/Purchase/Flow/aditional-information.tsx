//Create page component panel purchase with props children
//Compare this snippet from code\playstudios_app\src\pages\auth\Purchase\Flow\index.tsx:

import { useCallback } from 'react';

import { Button, Grid, TextField, Typography } from '@mui/material';
import Panel from 'src/components/panel';


//component props callback close 
export default function AditionalInformationFlow({ onOk, onCancel, onClose }: { onOk?: () => void, onCancel?: () => void, onClose?: () => void }) {
    //define state with useState
    //useCallback function buttons ok and cancel
    const handleOk = useCallback(() => {
        console.log('ok');
        //if onClose is true call onClose
        if (onOk) {
            onOk();
        }
    }, [onOk]);

    const handleCancel = useCallback(() => {
        console.log('handleCancel');
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


    return (
        <Panel header="Additional information" onClose={() => handleClose()} variant="modal">
            <Panel header="Contact Information" variant="form">
                <Grid container spacing="5">
                    <Grid item xs={6} >
                        <TextField
                            fullWidth
                            size="small"
                            label="First name"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            fullWidth
                            label="Last name"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            label="Email"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            label="Phone number"
                            variant="filled"
                        />
                    </Grid>
                </Grid>
            </Panel>
            <Panel header="Adress" variant="form">
                <Grid container spacing="5">
                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            size="small"
                            label="Address"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            label="City"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={4} >
                        <TextField
                            fullWidth
                            label="City"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={4} >
                        <TextField
                            fullWidth
                            label="Country"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={4} >
                        <TextField
                            fullWidth
                            label="Zip Code"
                            variant="filled"
                        />
                    </Grid>
                </Grid>
            </Panel>

            <Grid container spacing="12">
                <Grid item xs={12} ></Grid>
                <Grid item xs={12} ></Grid>
                <Grid item xs={6} >
                    <Button variant="secondary" onClick={() => handleCancel()} fullWidth>
                        <Typography variant="button" component="div">
                            Cancel
                        </Typography>

                    </Button>
                </Grid>
                <Grid item xs={6} >
                    <Button variant="primary" fullWidth onClick={() => handleOk()}>
                        <Typography variant="button" component="div">
                            Confirm
                        </Typography>

                    </Button>
                </Grid>
            </Grid>

        </Panel>
    )
}