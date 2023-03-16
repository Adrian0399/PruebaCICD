import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import NameIcon from "../../assets/icons/icon-person.svg";
import EmailIcon from "../../assets/icons/icon-email.svg";
import PhoneIcon from "../../assets/icons/icon-phone.svg";
import locationIcon from "../../assets/icons/icon-location.svg";

type Props = {
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    location?: string;
};

// const commonStyles = {
//     background: "#F6F6FB",
//     borderRadius: "6px",
//     padding: "15px",
//     marginTop: "8px",
// };

const ProfileCard: React.FC<Props> = ({ name, lastName, location, email, phone }) => {
    return (
        <div
            style={{
                background: "#F6F6FB",
                borderRadius: "6px",
                padding: "15px",
                marginTop: "8px",
            }}
        >
            <Grid container spacing={2}>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#696A93",
                            marginBottom: "5px",
                        }}
                    >
                        <img
                            src={NameIcon}
                            alt="Name Icon"
                            style={{ marginRight: "10px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "400", fontSize: "12px" }}
                        >
                            Name
                        </Typography>
                    </Box>

                    <Box sx={{ borderBottom: "1px solid #D8D8D8" }}>
                        <Typography
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                marginBottom: "16px",
                            }}
                        >{`${name} ${lastName}`}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#696A93",
                            marginBottom: "5px",
                        }}
                    >
                        <img
                            src={EmailIcon}
                            alt="Email Icon"
                            style={{ marginRight: "10px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "400", fontSize: "12px" }}
                        >
                            Email
                        </Typography>
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #D8D8D8" }}>
                        <Typography
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                marginBottom: "16px",
                            }}
                        >
                            {email}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#696A93",
                            marginBottom: "5px",
                        }}
                    >
                        <img
                            src={PhoneIcon}
                            alt="Phone Icon"
                            style={{ marginRight: "10px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "400", fontSize: "12px" }}
                        >
                            Phone
                        </Typography>
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #D8D8D8" }}>
                        <Typography
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                marginBottom: "16px",
                            }}
                        >
                            {phone}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#696A93",
                            marginBottom: "5px",
                        }}
                    >
                        <img
                            src={locationIcon}
                            alt="Location Icon"
                            style={{ marginRight: "10px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "400", fontSize: "12px" }}
                        >
                            Location
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <Typography
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "20px",
                                width: "232px",
                            }}
                        >
                            {location}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfileCard;
