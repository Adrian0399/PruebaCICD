import Typography from '@mui/material/Typography';
import coinIcon from 'assets/coin.svg';
import styled from 'styled-components';

//import formatPrice function
import { useTheme } from '@mui/material';
import { formatPrice } from 'src/utils/formatter';
import { PriceTagVariant } from './types';
import { variants } from './variants';

//import Thmeme material-ui
import { Theme } from "@mui/material/styles";

//Create typescript componente PriceTag with value prop, and theme variants
export default function PriceTag({ variant, value }: { variant?: any, value: any }) {

    //define useTheme selectcard call event parent typescript
    const theme = useTheme();
    return (
        <Feature variant={variant} theme={theme}>
            <PriceTagCon variant={variant} theme={theme}>
                <CoinIcon src={coinIcon} alt="Coins" variant={variant} theme={theme} />
                <TextTagCon variant={variant} theme={theme}>
                    <Typography variant={getTypograpfyVariant(variant)} component="div">
                        {formatPrice(value)}
                    </Typography>
                </TextTagCon>
            </PriceTagCon>
        </Feature>
    );
}


//create styled component Feature with variant prop
const Feature = styled.div<{ variant?: any, theme: Theme }>`
    ${({ variant, theme }) => variants(variant, theme).featured}
`;

//create styled component PriceTagCon with variant prop
const PriceTagCon = styled.div<{ variant?: any, theme: Theme }>`
    ${({ variant, theme }) => variants(variant, theme).priceTagCon}
`;

//create styled component TextTagCon with variant prop
const TextTagCon = styled.div<{ variant?: any, theme: Theme }>`
    ${({ variant, theme }) => variants(variant, theme).textTagCon}
`;

//create styled component CoinIcon with variant prop
const CoinIcon = styled.img<{ variant?: any, theme: Theme }>`
    ${({ variant, theme }) => variants(variant, theme).coinIcon}
`;

//create function getTypograpfyVariant with variant prop
function getTypograpfyVariant(variant?: any | undefined | null) {
    switch (variant) {
        case PriceTagVariant.loyaltyPoints:
            return 'H4_5';
        case PriceTagVariant.featured:
            return 'H4_R';
        case PriceTagVariant.reward:
            return 'H4_B';
        case PriceTagVariant.detail:
            return 'H3_M';
        default:
            return 'body1';
    }
}