import { useSelector } from "react-redux";
import EmptyPage from "src/components/empty-page";
import { RootState } from "src/store";

import { Divider, Typography } from "@mui/material";
import EmptyStateImage from "assets/empty_state.svg";
import Label from "src/components/label";
import Section from "src/components/section";
import ExclusiveCarousel from "./exclusive-carousel";

//Create page Available
export default function Available() {
    const { partners } = useSelector((state: RootState) => state);
    return (
        <>
            {partners?.partners &&
                <>
                    <ExclusiveCarousel />

                    <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
                    <Section>
                        <Label variant="H3_M" bottom={8} top={19}>ARIA</Label>
                    </Section>
                    <ExclusiveCarousel />

                    <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
                    <Section>
                        <Label variant="H3_M" bottom={8} top={19}>ARIA</Label>
                    </Section>
                    <ExclusiveCarousel />
                </>
            }
            {!partners?.partners &&
                <EmptyPage image={EmptyStateImage} title={
                    <>
                        Your wallet is currently <Typography variant="H2_SBP" color="text.tertiary" component="span">empty.</Typography>
                    </>
                } description="Use Reward Points to redeemreal Rewards!" />
            }
        </>
    );
}