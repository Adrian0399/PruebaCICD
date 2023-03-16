import { Avatar, Button, Card, CardMedia, Fade, Grid, SwipeableDrawer, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BackLink from 'src/components/back-link';
import Label from 'src/components/label';
import Section from 'src/components/section';
import Spacing from 'src/components/spacing';

import Panel from 'src/components/panel';

// ----------------------------------------------------------------------

import iconClose from 'assets/icons/close.svg';
import { PATH_AUTH } from 'src/router/paths';
export default function WalletDetail() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [terms, setTerms] = useState(false);
  const [mgm, setMgm] = useState(false);
  const [redentionInstruction, setRedentionInstruction] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title> PlayStudio | Reward Featured</title>
      </Helmet>
      <>
        <Section>
          <BackLink title='Wallet' link={PATH_AUTH.wallet} />
          <Spacing size={4} />
          <Grid container spacing="16">
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Card sx={{ boxShadow: 'none', margin: '0px', border: '2px solid #FF7A4A' }}>
                  <CardMedia
                    height="193"
                    component="img"
                    image="https://crowdsourcer.io/assets/images/no-img.png"
                    loading="lazy"
                  />
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Label variant="H1_B" bottom={11}>Champagne at Prime</Label>
                <Label variant="H3_R" color="secondary" bottom={4}>Bellagio Resort and Casino</Label>
                <Label variant="H3_SB">Las Vegas, United States</Label>
              </Grid>
              <Spacing size={6} />
              <Grid item xs={12} >
                <Button variant="cancel" fullWidth>
                  <Typography variant="button" component="div">
                    Cancel
                  </Typography>
                </Button>
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant="outlined" fullWidth onClick={() => enqueueSnackbar('We’ve sent a new email.',
                  {
                    variant: 'success',
                    TransitionComponent: Fade,
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'center'
                    },
                    action: (key) => (
                      <>
                        <Avatar
                          src={iconClose}
                          sx={{ width: 10, height: 10, marginRight: '10px' }}
                          onClick={() => closeSnackbar(key)}
                        />
                      </>
                    )
                  })}>
                  <Typography variant="button" component="div">
                    Resend confirmation email
                  </Typography>
                </Button>
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12} >
                <Label variant="default">Enjoy two glasses of champagne at Prime with the purchase of an appetizer or meal. Award-winning, four star celebrity chef andrestauranteur, Jean-Georges Vangerchten invites you to realize steakhouse dining at it’s finest with prime streak, seafood and lamb accompanied by fabulous sauces, sides and meticulously selected wines.</Label>
              </Grid>

              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant='reward' fullWidth onClick={() => { }} >Award Restrictions</Button>

                <Button variant='rewardCollection' fullWidth onClick={() => setTerms(true)}>Term and Conditions</Button>

                <Button variant='rewardCollection' fullWidth onClick={() => setRedentionInstruction(true)}>Redemption Instructions</Button>
              </Grid>
            </Grid>

          </Grid>

        </Section>

        <SwipeableDrawer
          variant="temporary"
          ModalProps={{
            keepMounted: false,
          }}
          anchor={'bottom'}
          open={terms}
          onClose={() => { setTerms(false) }}
          onOpen={() => { setTerms(true) }}
        >

          <Panel header="Terms and Conditions" onClose={() => { setTerms(false) }} variant="limit">
            <Label variant="default" top={26}>
              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e
            </Label>

          </Panel>


        </SwipeableDrawer>

        <SwipeableDrawer
          variant="temporary"
          ModalProps={{
            keepMounted: false,
          }}
          anchor={'bottom'}
          open={mgm}
          onClose={() => { setMgm(false) }}
          onOpen={() => { setMgm(true) }}
        >

          <Panel header="MGM International Award" onClose={() => { setMgm(false) }} variant="limit">
            <Label variant="default" top={26}>
              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e
            </Label>

          </Panel>


        </SwipeableDrawer>

        <SwipeableDrawer
          variant="temporary"
          anchor={'bottom'}
          open={redentionInstruction}
          onClose={() => { setRedentionInstruction(false) }}
          onOpen={() => { setRedentionInstruction(true) }}
        >

          <Panel header="Redemption instructions" variant='box' onClose={() => { setRedentionInstruction(false) }}>

            <Label variant="default" top={26}>Redemtion code</Label>
            <Label variant="H3_SB" bottom={26}>23NPTD</Label>

            <Label variant="default" top={26}>Contact number</Label>
            <Label variant="H3_SB" bottom={26}>N/A</Label>

            <Label variant="default" top={26}>Hours of operation</Label>
            <Label variant="H3_SB" bottom={26}>N/A</Label>

            <Label variant="default" top={26}>This reward is for digital download. Click the above links and save the image to your device for use.</Label>

          </Panel>

        </SwipeableDrawer>

      </>
    </>
  );
}
