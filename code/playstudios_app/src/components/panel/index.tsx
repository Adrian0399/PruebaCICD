import { AppBar, Box, Grid, IconButton, Toolbar, Typography, Button } from "@mui/material";


import { useTheme } from '@mui/material/styles';

import iconClose from 'assets/icons/close.svg';
import Label from "../label";
import { Variant, variantStyle } from "./variants";

//Create component panel with header and children
export default function Panel({ children, header, onClose, variant, icon, actions }: { children: any, header: string, onClose?: () => any, variant?: Variant, icon?: any, actions?: any[] }) {
    const theme = useTheme();
    return (

        <Grid container spacing={0} sx={variantStyle(theme, variant).root}>
            <Grid item xs={12}>
                <AppBar position="static" style={variantStyle(theme, variant).appBar}>
                    <Toolbar style={variantStyle(theme, variant).toolbar}>

                        {icon && <img src={icon} style={{ marginRight:14 }}/>}

                        {(variant === 'limit' || variant === 'modal' || variant === 'box'  ) &&
                            <Typography variant="H2_SBP" color="text.secondary" component="div" sx={{ flexGrow: 1, textAlign: 'center' }} >
                                {header}
                            </Typography>
                        }

                        {(variant === 'form' ) &&
                            <Typography variant="H3_SB" color="text.primary" component="div" sx={{ flexGrow: 1, textAlign: 'left' }} >
                                {header}
                            </Typography>
                        }

                        {(variant === 'formSecondary' ) &&
                            <Typography variant="H3_M" color="text.primary" component="div" sx={{ flexGrow: 1, textAlign: 'left' }} >
                                {header}
                            </Typography>
                        }

                        {(variant === 'field' ) &&
                            <Typography variant="R" color="text.secondary" component="div" sx={{ flexGrow: 1, textAlign: 'left' }} >
                                {header}
                            </Typography>
                        }

                        {(variant !== 'form' && variant !== 'formSecondary' && variant !== 'field') &&
                            <IconButton onClick={() => onClose && onClose()} color="inherit">
                                <img src={iconClose} />
                            </IconButton>
                        }

                        {actions && actions.map((action, index) => (
                            <Button
                                key="edit"
                                color="inherit"
                                startIcon={ (action.icon && <img src={action.icon} alt={action.label} style={{ width: "14px" }} />) }
                                sx={{ padding: 0, minWidth: "initial" }}
                                onClick={action.onClick}>
                                <Label variant={"H3_SB"} color={"text.tertiary"}>{action.label}</Label>
                            </Button>
                        ))}

                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12} style={variantStyle(theme, variant).grid} >
                <Box sx={variantStyle(theme, variant).box}>
                    {children}
                    {variant === 'limit' &&
                        <Box sx={{
                            height: 70,
                            width: '100%',
                            boxShadow: 'inset -46px -86px 53px -33px #ffffff',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                        }}
                        />}
                </Box>

            </Grid>

        </Grid>
    )
}