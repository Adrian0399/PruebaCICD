import React from 'react';

import { Grid, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import EmailIcon from "../../../../src/assets/icons/icon-email.svg";
import locationIcon from "../../../../src/assets/icons/icon-location.svg";
import NameIcon from "../../../../src/assets/icons/icon-person.svg";
import PhoneIcon from "../../../../src/assets/icons/icon-phone.svg";

type Props = {
    name?: string;
    setName: (value: string) => void;
    lastName?: string;
    setLastName: (value: string) => void;
    email?: string;
    setEmail: (value: string) => void;
    phone?: string;
    setPhone: (value: string) => void;
    location?: string;
    street?: string;
    setStreet: (value: string) => void;
    city?: string;
    setCity: (value: string) => void;
    place?: string;
    setPlace: (value: string) => void;
    postal?: string;
    setPostal: (value: string) => void;
    country?: string;
    setCountry: (value: string) => void;
    handleSave: () => void;
    handleEdit: () => void;
    handleReturn: () => void;
    editMode: boolean;
};

const countries = ["USA", "Canada", "Mexico"];

const inputProps = {
    style: { border: "none" },
    disableUnderline: true,
};
const CardForm: React.FC<Props> = ({
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    location,
    street,
    setStreet,
    city,
    setCity,
    place,
    setPlace,
    postal,
    setPostal,
    country,
    setCountry,
    handleSave,
    handleEdit,
    handleReturn,
    editMode,
}) => {

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phone = event.target.value;
        let formattedPhone = phone.replace(/[^0-9]/g, "");

        if (formattedPhone.length > 3) {
            formattedPhone =
                formattedPhone.slice(0, 3) + "-" + formattedPhone.slice(3);
        }

        if (formattedPhone.length > 7) {
            formattedPhone =
                formattedPhone.slice(0, 7) + "-" + formattedPhone.slice(7);
        }

        setPhone(formattedPhone);
    };

    const handleCountryChange = (event: any) => {
        setCountry(event.target.value);
    };
    const handleStreetChange = (event: any) => {
        setStreet(event.target.value);
    };
    const handleCityChange = (event: any) => {
        setCity(event.target.value);
    };
    const handlePlaceChange = (event: any) => {
        setPlace(event.target.value);
    };
    const handlePostalChange = (event: any) => {
        setPostal(event.target.value);
    };

    return (
        <div>
            <Grid
                container
                style={{
                    borderRadius: "6px",
                    marginTop: "8px",
                    background: "white",
                }}
            >

                {/* TODO: //!NAME */}
                <Grid
                    style={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "3px",
                        width: "100%",
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#F6F6FB",
                            padding: "13px 20px",
                        }}
                    >
                        <img
                            src={NameIcon}
                            alt="Name Icon"
                            style={{ marginRight: "13px", width: "11.26px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "400",
                                fontSize: "12px",
                                lineHeight: "16px",
                            }}
                        >
                            Name
                        </Typography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="nombre"
                                value={name}
                                onChange={handleNameChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    marginBottom: "13px",
                                    background: "white",
                                    width: "100%",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{ padding: "0px 10px" }}>
                            <TextField
                                id="lastname"
                                value={lastName}
                                onChange={handleLastNameChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    marginBottom: "13px",
                                    background: "white",
                                    width: "100%",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* TODO: //!NAME */}


                <Grid
                    container
                    style={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "3px",
                        marginTop: "13px",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#F6F6FB",
                            padding: "13px 20px",
                        }}
                    >
                        <img
                            src={EmailIcon}
                            alt="Email Icon"
                            style={{ marginRight: "13px", width: "15.18px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "400",
                                fontSize: "12px",
                                lineHeight: "16px",
                            }}
                        >
                            Email
                        </Typography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    width: "100%",
                                    marginBottom: "13px",
                                    background: "white",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>



                <Grid
                    container
                    style={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "3px",
                        marginTop: "13px",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#F6F6FB",
                            padding: "13px 20px",
                        }}
                    >
                        <img
                            src={PhoneIcon}
                            alt="Phone Icon"
                            style={{ marginRight: "13px", width: "14px" }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "400",
                                fontSize: "12px",
                                lineHeight: "16px",
                            }}
                        >
                            Phone
                        </Typography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    width: "100%",
                                    marginBottom: "13px",
                                    background: "white",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>



                <Grid
                    style={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "3px",
                        width: "100%",
                        marginTop: "13px",
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#F6F6FB",
                            padding: "13px 20px",
                        }}
                    >
                        <img
                            src={locationIcon}
                            alt="Location Icon"
                            style={{
                                marginRight: "13px",
                                width: "11.16px",
                                height: "16.17px",
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "400",
                                fontSize: "12px",
                                lineHeight: "16px",
                            }}
                        >
                            Location
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="street"
                                value={street}
                                onChange={handleStreetChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    width: "100%",
                                    marginBottom: "13px",
                                    background: "white",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="city"
                                value={city}
                                onChange={handleCityChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    marginBottom: "13px",
                                    background: "white",
                                    width: "100%",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={4} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="place"
                                value={place}
                                onChange={handlePlaceChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    marginBottom: "13px",
                                    background: "white",
                                    width: "100%",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={4} style={{ padding: "0px 10px 0px 16px" }}>
                            <TextField
                                id="postal"
                                value={postal}
                                onChange={handlePostalChange}
                                // disabled={!editMode}
                                variant="standard"
                                InputProps={inputProps}
                                sx={{
                                    borderBottom: "1px solid #D8D8D8",
                                    marginBottom: "13px",
                                    background: "white",
                                    width: "100%",
                                    padding: "13px 0px 0px 5px",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            style={{
                                padding: "0px 10px 0px 16px",
                            }}
                        >
                            <Select
                                value={country}
                                onChange={handleCountryChange}
                                displayEmpty
                                sx={{
                                    "& .MuiSelect-root": {
                                        border: "white",
                                        outline: "none",
                                        boxShadow: "none",
                                        "&:focus": {
                                            borderBottom: "13px solid #D8D8D8",
                                        },
                                    },
                                    "& .MuiSelect-select": {
                                        padding: "0px 5px",
                                    },
                                    "& .MuiListItem-root": {
                                        padding: "0px",
                                    },

                                    borderBottom: "1px solid #D8D8D8",
                                    width: "100%",
                                    marginBottom: "13px",
                                    // background: 'white',
                                    border: "none",
                                    // border: '1px solid red',
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select country
                                </MenuItem>
                                {countries.map((country) => (
                                    <MenuItem key={country} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </div>
    )
}
export default CardForm;