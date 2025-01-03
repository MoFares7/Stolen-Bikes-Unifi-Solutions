import { Statuses } from "./statusType";

export interface StolenBikeDataType {
  frame_model: string;
  status: Statuses;
  large_img: string;
  title: string;
  description: string;
  date_stolen: number;
  stolen_location: string;
  image: string;
  id: string;
}
