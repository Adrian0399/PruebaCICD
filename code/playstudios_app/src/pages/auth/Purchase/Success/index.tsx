//Create page purchase success

import { Grid, Typography } from '@mui/material';
import PlayCard from 'components/cards';
import { Helmet } from 'react-helmet-async';


import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import emptyImage from 'assets/empty.webp';
import ShiningLights from 'components/shining-lights';
import { useDispatch } from 'react-redux';
import { cleanCache } from 'slices/featuredSlice';
import { PATH_AUTH } from 'src/router/paths';

// ----------------------------------------------------------------------

export default function PurchaseSuccess() {

    const dispatch = useDispatch();

    //navigate react router dom
    const navigate = useNavigate();

    //Function Navigate to Home
    const navigateToHome = () => {
        //Cache false to featured
        dispatch(cleanCache() as any);
        navigate(PATH_AUTH.home);
    }

    //Navigate to wallet
    const navigateToWallet = () => {
        //Cache false to featured
        dispatch(cleanCache() as any);
        navigate(PATH_AUTH.wallet);
    }

    return (
        <>
            <Helmet>
                <title>Purchase Success | PlayStudio</title>
            </Helmet>
            <Grid container spacing="15">
                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="H2_SBP" component="div">
                        Enjoy your reward!
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="H3_R" color="seconsary" component="div">
                        Your award has been added to your wallet. A confirmation of your purchase has been sent to the email you provided.
                    </Typography>
                </Grid>


                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <ShiningLights>
                        <PlayCard title='Champagne at Prime' image={emptyImage} variant='purchase' />
                    </ShiningLights>
                </Grid>

                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Button variant="primary" fullWidth onClick={() => { navigateToWallet() }}>
                        <Typography variant="button" component="div">
                            View in Wallet
                        </Typography>
                    </Button>
                </Grid>

                <Grid item xs={12} sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Button variant="outlined" fullWidth onClick={() => { navigateToHome() }}>
                        <Typography variant="button" component="div">
                            Back to Rewards Store
                        </Typography>
                    </Button>
                </Grid>

            </Grid>
        </>
    );
}

