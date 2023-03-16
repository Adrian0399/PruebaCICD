import React from 'react';
import { Modal, Typography, Button, Grid } from '@mui/material';
import Panel from 'src/components/panel';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
}

const ReusableModal: React.FC<Props> = ({
    isOpen,
    onClose,
    title,
    message,
    confirmText,
    cancelText,
    onConfirm,
}) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <>
                {isOpen && (
                    <Panel header={title} variant="modal" onClose={onClose} >
                        <Grid container spacing="5" sx={{ justifyContent: 'center' }}>
                            <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }} maxWidth="186px">
                                <Typography variant="H3_SB" component="div">
                                    {message}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing="17">
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography variant="H5_R" component="div" sx={{ fontSize: '11px' }}>
                                    Leaving this page will discard any changes.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing="12">
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={6}>
                                <Button variant="secondary" onClick={onClose} fullWidth>
                                    <Typography variant="button" component="div">
                                        {cancelText}
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="primary" fullWidth onClick={onConfirm}>
                                    <Typography variant="button" component="div">
                                        {confirmText}
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Panel>
                )}
            </>
        </Modal>
    );
};

export default ReusableModal;
