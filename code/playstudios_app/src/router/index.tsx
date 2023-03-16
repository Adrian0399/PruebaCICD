import DashboardLayout from 'layouts/dashboard';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardHomeLayout from 'layouts/home';

// layouts

// config

//elements
import {
  Account, FeatureDetail, RewardDetail, WalletDetail,DetailHistory, HomePage, Page404, PurchaseSuccess, Wallet
} from './elements';
import { PATH_AUTH } from './paths';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([

    // Privated elements 
    {
      path: '',
      element: <DashboardHomeLayout />,
      children: [
        //{ path: '500', element: <Page500 /> },

        //Home page
        { path: PATH_AUTH.home, element: <HomePage /> },
        { path: PATH_AUTH.detailFeature, element: <FeatureDetail /> },
        { path: PATH_AUTH.detail, element: <RewardDetail /> },
        { path: PATH_AUTH.detailWallet, element: <WalletDetail /> },
        { path: PATH_AUTH.detailHistory, element: <DetailHistory /> },

        //Wallet page
        { path: PATH_AUTH.wallet, element: <Wallet /> },


        //Settings, account
        { path: PATH_AUTH.account, element: <Account /> },
        
        
        { path: '404', element: <Page404 /> },
      ],
    },

    {
      path: '',
      element: <DashboardLayout />,
      children: [

        

        //Purchase
        { path: PATH_AUTH.purchaseSuccess, element: <PurchaseSuccess /> },

        //{ path: '403', element: <Page403 /> },

        

      ],
    },

    /*{
      element: <CompactLayout />,
      children: [
        //{ path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        //{ path: '403', element: <Page403 /> },
      ],
    },*/

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
