import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


//Import useState
import { useState } from "react";
import Label from "src/components/label";
import Section from "src/components/section";
import Available from "./Available";
import History from "./History";

const titleMotion = {
    hidden: { opacity: 0, marginLeft: 20 },
    show: {
        opacity: 1,
        marginLeft: 0
    }
}

//Create react page Wallet contain tabs with carousel
export default function Wallet() {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="wallet">

            <Section>
                <Label variant="H2_SBP" bottom={10}>Wallet</Label>
                <Box sx={{ marginBottom: '8px' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary">
                        <Tab label={t('Available (52)')} />
                        <Tab label={t('History (48)')} />
                    </Tabs>
                </Box>
            </Section>
            <TabPanel value={value} index={0}>
                <Available />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <History />
            </TabPanel>
        </div>
    );
}


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ pt: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
