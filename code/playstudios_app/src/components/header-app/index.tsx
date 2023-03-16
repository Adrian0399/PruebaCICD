import { AppBar, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login, User } from "slices/userSlice";
import { RootState } from "src/store";
import ButtonBack from "../button-back";
import PriceTag from "../price-tag";
import { PriceTagVariant } from "../price-tag/types";



// ----------------------------------------------------------------------
export default function HeaderApp() {

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  
  const back = () => {
    try{
      //Call native function nbo declared to WebViewInterface.Close() ANDROID
      (window as any).WebViewInterface.Close();
    }catch(e){
      console.log(e);
    }

    try{
       //Call native function nbo declared to Close() IOS
       (window as any).webkit.messageHandlers.Close.postMessage(true);
    }catch(e){
      console.log(e);
    }
    

   
    
  }

  const setterUser = () => {

    //update user.user data
    let update = {
      ...user.user,
      logged: true,
      gamme: {
        id: 1,
        name: 'Poker',
        icon: 'https://images.macrumors.com/t/Irwz7miZ5Hu8YU4G21GT4sYee-Y=/400x0/article-new/2020/07/messagesicon-200x200.png?lossy'
      }
    } as User;

    //dispatch login with user
    dispatch(login(update) as any);
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonBack onClick={back} />
        <PriceTag variant={PriceTagVariant.loyaltyPoints} value={user.user?.coins} />
      </Toolbar>
    </AppBar>
  );
}
