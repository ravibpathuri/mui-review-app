import { IconButtonProps } from "@mui/material";

export type TatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TatingType;
};
export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
