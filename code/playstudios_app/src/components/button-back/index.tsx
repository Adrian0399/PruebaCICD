import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import ButtonTag from './button';
import ButtonWrapper from './button-wrapper';
import GameIcon from './game-icon';
import IconArrow from './icon-arrow';

//Component ButtonBack with click event
export default function ButtonBack( {onClick} : {onClick?: () => void} ) {
    //User slice redux to get user data
    const { user } = useSelector((state: RootState) => state);

    //Trigger click event
    const click = () => {
        if (onClick) {
            onClick();
        }
    }

    //Return component
    return (
        <ButtonWrapper variant={user.user?.logged ? 'logged' : 'noLogged'} onClick={click} >
            <ButtonTag variant={user.user?.logged ? 'logged' : 'noLogged'}>
                {user.user?.logged && <IconArrow />}
                <GameIcon variant={user.user?.logged ? 'logged' : 'noLogged'} src={user.user?.gamme?.icon} alt="back" />
            </ButtonTag>
        </ButtonWrapper>
    );
}