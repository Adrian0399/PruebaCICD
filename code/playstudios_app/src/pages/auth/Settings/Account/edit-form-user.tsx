//Create react componene form user info
import { useDispatch, useSelector } from "react-redux";
import Panel from "src/components/panel";
import { RootState } from "src/store";

import { Grid, TextField } from "@mui/material";

import EmailIcon from "assets/icons/icon-email.svg";
import NameIcon from "assets/icons/icon-person.svg";
import PhoneIcon from "assets/icons/icon-phone.svg";
import Spacing from "src/components/spacing";

import IconSave from 'assets/icons/icon-save.svg';
import { Form, FormikProvider, useFormik } from "formik";
import { updateUser } from "src/store/slices/userSlice";

export default function AccountEdit() {
    const { user } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const onSubmit = async (values: any) => {
        dispatch(updateUser(values) as any);
    };

    const formik = useFormik<any>({
        initialValues: {
            name: user.user?.name,
            email: user.user?.email,
            phone: user.user?.phone,
        },
        onSubmit: onSubmit,
    });

    const handleEditing = () => {
        formik.submitForm();
    };

    const actions = [{
        icon: IconSave,
        onClick: handleEditing,
        label: "Save",
    }];

    return (
        <Panel variant="formSecondary" header="Account Details" actions={actions}>
            <FormikProvider value={formik}>
                <Form>
                    <Panel header="Name" variant="field" icon={NameIcon}>
                        <Grid container spacing={'10px'}>
                            <Grid item xs={6}>
                                <TextField name="name" variant="standard" fullWidth value={formik.values.name} onChange={formik.handleChange} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="standard" fullWidth />
                            </Grid>
                        </Grid>
                    </Panel>
                    <Spacing size={3} />


                    <Panel header="Email" variant="field" icon={EmailIcon}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField name="email" variant="standard" fullWidth value={formik.values.email} onChange={formik.handleChange} />
                            </Grid>
                        </Grid>
                    </Panel>
                    <Spacing size={3} />


                    <Panel header="Phone" variant="field" icon={PhoneIcon}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField name="phone" variant="standard" fullWidth value={formik.values.phone} onChange={formik.handleChange} />
                            </Grid>
                        </Grid>
                    </Panel>
                </Form>
            </FormikProvider>

        </Panel>
    );
}
