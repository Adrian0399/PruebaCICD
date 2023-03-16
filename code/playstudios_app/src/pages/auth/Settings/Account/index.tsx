//Create react page Account detail user
import { useSelector } from "react-redux";
import Label from "src/components/label";
import Section from "src/components/section";
import { RootState } from "src/store";
import AccountEdit from "./edit-form-user";
import AccountInfo from "./info-user";

export default function Account() {
    const { user } = useSelector((state: RootState) => state);

    return (
        <Section>
            <Label variant="H2_SBP" bottom={4} top={11}>Settings</Label>
            {!user.isEdited && <AccountInfo />}
            {user.isEdited && <AccountEdit />}
        </Section>
    );
}
