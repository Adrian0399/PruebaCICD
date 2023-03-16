import { AwardType } from "src/store/slices/historySlice";
import { CardVariantType } from "./variants";

//define card props
export default interface CardProps {
  variant: CardVariantType | string | undefined;
  title: string;
  description?: string;
  descriptionImage?: string | "";
  image: string;
  price?: number | null;
  ribbon?: string | null;

  award?: AwardType | null;
  awardText?: string;
  awardIcon?: any;

  onClick?: () => void;
}