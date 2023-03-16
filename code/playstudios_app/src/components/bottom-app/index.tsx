import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

//Import assets/footer-account.svg as react component
import { ReactComponent as main } from 'assets/main-icon.svg';

import { ReactComponent as account } from 'assets/footer-account.svg';
import { ReactComponent as accountSelected } from 'assets/icons/account_selected.svg';

import { ReactComponent as wallet } from 'assets/footer-wallet.svg';
import { ReactComponent as walletSelected } from 'assets/icons/wallet_selected.svg';


//import navigation react router dom
import { useNavigate } from 'react-router-dom';
import { PATH_AUTH } from 'src/router/paths';

//import SvgIcon material ui
import SvgIcon from '@mui/material/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { setActiveMenu } from 'src/store/slices/menuSlice';

const btnWallet = <SvgIcon component={wallet} viewBox="0 0 180 141" sx={{ height: '20px', marginBottom: '7px', marginTop: '5px' }} />
const btnWalletSelected = <SvgIcon component={walletSelected} viewBox="0 0 26 21" sx={{ height: '20px', marginBottom: '7px', marginTop: '5px' }} />
const btnAccount = <SvgIcon component={account} viewBox="0 0 172 180" sx={{ height: '20px', marginBottom: '7px', marginTop: '5px' }} />
const btnAccountSelected = <SvgIcon component={accountSelected} viewBox="0 0 20 21" sx={{ height: '20px', marginBottom: '7px', marginTop: '5px' }} />

export default function BottomApp() {
    const dispatch = useDispatch();

    // Typescript useSelector hook to get state from redux store
    const { menu } = useSelector((state: RootState) => state);
    const [value, setValue] = React.useState(0);

    //navigate react router dom
    const navigate = useNavigate();

    const selectTab = (newValue: number) => {
        dispatch( setActiveMenu(newValue) as any );
        setValue(newValue);
        
        if (newValue === 0) {
            navigate(PATH_AUTH.home);
        } else if (newValue === 1) {
            navigate(PATH_AUTH.wallet);
        } else if (newValue === 2) {
            navigate(PATH_AUTH.account);
        }

    }


    return (
        <>
            <Box sx={{ pb: 7 }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={7}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => selectTab(newValue)}
                    >
                        <BottomNavigationAction disableRipple label="Home" icon={<SvgIcon component={main} viewBox="0 0 500 591" sx={{ height: '33px', marginBottom: '2.5px' }} />} />
                        <BottomNavigationAction disableRipple label="Wallet" icon={ menu.active === 1 ? btnWalletSelected : btnWallet } />
                        <BottomNavigationAction disableRipple label="Account" icon={ menu.active === 2 ? btnAccountSelected : btnAccount } />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    );
}