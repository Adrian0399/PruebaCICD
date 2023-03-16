import { PriceTagVariant } from "./types";

//import Thmeme material-ui
import { Theme } from "@mui/material/styles";

//define variants styles
export const variants = (variant?: string, theme?: Theme) => {
  switch (variant) {
    case PriceTagVariant.loyaltyPoints:
      return {
        featured: {
          margin: "0 8px 0 12px",
        },
        priceTagCon: {
          display: "flex",
          alignItems: "center",
        },

        textTagCon: {
          background: "linear-gradient(90deg, #6B6C95 0%, #AAACD6 100%)",
          width: "auto",
          height: "auto",
          borderRadius: "0 24px 24px 0",
          padding: "3px 10px 3px 16px",
          margin: "0 0 0 -9px",
        },
        coinIcon: {
          width: 26,
          height: "auto",
          zIndex: 1,
        },
      };
    case PriceTagVariant.featured:
      return {
        featured: {
          position: 'absolute' as 'absolute',
          bottom: 9,
          left: 9,
          background: "white",
          borderRadius: 3,
          padding: "2px 9px",
        },
        priceTagCon: {
          display: "flex",
          alignItems: "center",
        },

        textTagCon: {
          width: "auto",
          height: "auto",
          padding: "0 0 0 13px",
          margin: "0 0 0 -9px",
        },
        coinIcon: {
          width: 15,
          height: "auto",
          zIndex: 1,
        },
      };
    case PriceTagVariant.reward:
      return {
        featured: {},
        priceTagCon: {
          display: "flex",
          alignItems: "center",
        },

        textTagCon: {
          width: "auto",
          height: "auto",
          padding: "0 0 0 13px",
          margin: "0 0 0 -9px",
        },
        coinIcon: {
          width: 12,
          height: "auto",
        },
      };
    case PriceTagVariant.detail:
      return {
        featured: {
          display: 'inline-flex'
        },
        priceTagCon: {
          display: "flex",
          alignItems: "center",
        },

        textTagCon: {
          width: "auto",
          height: "auto",
          padding: "0 0 0 13px",
          margin: "0 0 0 -9px",
        },
        coinIcon: {
          width: 17,
          height: "auto",
        },
      };
    default:
      return {
        featured: {},
        priceTagCon: {},
        textTagCon: {},
        coinIcon: {},
      };
  }
};
