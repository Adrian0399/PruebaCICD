import { Helmet } from 'react-helmet-async';

// sections immports
import Loading from 'components/loading';
import { useEffect } from 'react';
import HomeCarousel from 'src/pages/auth/Home/home-carousel';

//import redux
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/store';
import { getHome } from 'src/store/slices/homeSlice';

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useDispatch();

  // Typescript useSelector hook to get state from redux store
  const { home } = useSelector((state: RootState) => state);


  useEffect(() => {
    // typescript dispatch redux actions types for home
    if (!home.cache)
      dispatch(getHome() as any);
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title> PlayStudio | Dashboard</title>
      </Helmet>
      {(home.isLoading) && <Loading titles={["Enjoy over 500 rewards in our catalog", "Use Rewards Points to redeem now!", "Rewards Cards and Rewards Points imagery"]} />}
      {(!home.isLoading) && <HomeCarousel />}
    </>
  );
}
