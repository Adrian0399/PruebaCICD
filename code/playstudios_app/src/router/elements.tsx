import { ElementType, lazy, Suspense } from 'react';

// components
import LoadingScreen from 'components/loading-screen';
import Section from 'src/components/section';


// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
(

  <Suspense fallback={<Section><LoadingScreen /></Section>}>
    <Component {...props} />
  </Suspense>
);

//MAIN
export const Page404 = Loadable(lazy(() => import('pages/Page404')));

// AUTH
export const HomePage = Loadable(lazy(() => import('pages/auth/Home')));

//Card detail Feature
export const FeatureDetail = Loadable(lazy(() => import('pages/auth/CardDetail/feature')));

//Card detail Reward
export const RewardDetail = Loadable(lazy(() => import('pages/auth/CardDetail/reward')));
//Card detail Reward
export const WalletDetail = Loadable(lazy(() => import('pages/auth/CardDetail/wallet')));
//Detail history
export const DetailHistory = Loadable(lazy(() => import('pages/auth/CardDetail/history')));

//Wallet tabs
export const Wallet = Loadable(lazy(() => import('pages/auth/Wallet')));

//Account
export const Account = Loadable(lazy(() => import('pages/auth/Settings/Account')));

//Purchase success
export const PurchaseSuccess = Loadable(lazy(() => import('pages/auth/Purchase/Success')));