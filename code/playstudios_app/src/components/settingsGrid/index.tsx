import React from 'react';
import { Grid, Button } from '@mui/material';

import IconReturn from '../../assets/icons/returnIcon.svg'
import IconSave from '../../assets/icons/icon-save.svg'
import IconEdit from '../../assets/icons/icon-edit.svg'
import Label from '../label';

interface SettingsGridProps {
    handleEdit: () => void;
    handleSave: () => void;
    handleReturn: () => void;
    editMode?: boolean;
    setEditMode: (value: boolean) => void;
}
const commonStyles = {
    width: "51px",
    height: "20px",
    color: "#FFA133",
    background: "white",
    "&:hover": { background: "transparent" },
    fontSize: "14px",
    fontWeight: "600",
};

const SettingsGrid: React.FC<SettingsGridProps> = ({ handleEdit, handleSave, handleReturn, editMode, setEditMode }) => {

    const handleEditing = () => {
        setEditMode(true);
        handleEdit();
    };

    const handleSaving = () => {
        setEditMode(false);
        handleSave();
    };

    const handleReturning = () => {
        handleReturn();
    };

    return (
        <Grid >
            {editMode ? (
                <>
                    <Grid style={{ margin: "0px 0px 16px 0px" }}>
                        <Button
                            variant="contained"
                            startIcon={
                                <img
                                    src={IconReturn}
                                    alt="Name Icon"
                                    style={{
                                        width: "30px",
                                        margin: "0px 0px",
                                        padding: "0px -40px",
                                    }}
                                />
                            }
                            sx={{
                                width: "101px",
                                height: "20px",
                                color: "#696A93",
                                background: "white",
                                "&:hover": { background: "transparent" },
                                fontSize: "14px",
                                fontWeight: "700",
                                padding: "0px",
                                margin: "0px",
                            }}
                            onClick={handleReturning}
                        >
                            Settings
                        </Button>
                    </Grid>
                    <Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <Label variant="H3_M">Account Details</Label>
                            </Grid>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                <Button
                                    variant="contained"
                                    startIcon={<img src={IconSave} alt="NameIcon" style={{ marginRight: "13px", width: "14px" }} />}
                                    style={{ ...commonStyles }}
                                    onClick={handleSaving}
                                >
                                    <Label variant={"H3_SB"} color={"text.Tertiary"}>
                                        Save
                                    </Label>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <Grid >
                    <Label variant="H2_SBP" top={24} >Settings</Label>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Label variant="H3_M" top={16}>Account Details</Label>
                        </Grid>
                        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                variant="contained"
                                startIcon={<img src={IconEdit} alt="Name Icon" style={{ marginRight: "13px", width: "14px" }} />}
                                style={{...commonStyles, marginTop: "16px"}}
                                onClick={handleEditing}
                            >
                                <Label variant={"H3_SB"} color={"text.Tertiary"}>
                                    Edit
                                </Label>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )
            }
        </Grid >
    );
};

export default SettingsGrid;
