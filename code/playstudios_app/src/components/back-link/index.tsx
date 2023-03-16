//Create typescript react component BackLink with variant and title props

import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


import iconArrowRight from 'assets/icon-arrow-right.svg';
import { PATH_AUTH } from 'src/router/paths';

import { Box, Button, Grid, Typography } from '@mui/material';
import IconArrow from '../button-back/icon-arrow';
// ----------------------------------------------------------------------
//
// ----------------------------------------------------------------------
/* const useStyles = (theme ) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5, 10)
        }
    }
});
 */
// ----------------------------------------------------------------------
//
// ----------------------------------------------------------------------
type BackLinkProps = {
    variant?: 'default' | 'small';
    title?: string;
    link?: string;
};

// ----------------------------------------------------------------------
//
// ----------------------------------------------------------------------
export default function BackLink({ variant = 'default', title = '404', link = PATH_AUTH.home }: BackLinkProps): JSX.Element {
    //const classes = useStyles();
    const navigate = useNavigate();

    const handleGoBack = useCallback(() => {
        navigate(link);
    }, []);

    return (
        <Grid container spacing="4.65">
          <Grid alignItems="center" item display="flex">
            <IconArrow variant='alone' onClick={handleGoBack}></IconArrow>
          </Grid>
          <Grid item>
            <Typography variant="H3_B" color="text.secondary" component="div" onClick={handleGoBack}>
              {title}
            </Typography>
          </Grid>
        </Grid>

    );
}
