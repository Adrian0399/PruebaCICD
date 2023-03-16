//Create react componene form user info

import { useDispatch, useSelector } from "react-redux";
import Panel from "src/components/panel";
import { RootState } from "src/store";

import FormInfo from "src/components/form/form-info";

import EmailIcon from "assets/icons/icon-email.svg";
import NameIcon from "assets/icons/icon-person.svg";
import PhoneIcon from "assets/icons/icon-phone.svg";
import LocationIcon from "assets/icons/icon-location.svg";

import IconEdit from 'assets/icons/icon-edit.svg';
import { setEdited } from 'src/store/slices/userSlice';

export default function AccountInfo() {
    const { user } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    //useCallback handleEditing set isEdited to true
    const handleEditing = () => {
        dispatch(setEdited(true));
    };


    const actions = [
        {
            icon: IconEdit,
            onClick: handleEditing,
            label: "Edit",
        }
    ];

    return (
        <Panel variant="formSecondary" header="Account Details" actions={actions}>
            <FormInfo label="Name" value={user.user?.name} icon={NameIcon} top/>
            <FormInfo label="Email" value={user.user?.email} icon={EmailIcon} />
            <FormInfo label="Phone" value={user.user?.phone} icon={PhoneIcon}/>
            <FormInfo label="Location" value={user.user?.phone} icon={LocationIcon} bottom/>
        </Panel>
    );
}
