import { Statuses } from "./statusType";

export interface RowStolenBikesType {
  id: any;
  stolen_location: string;
  date_stolen: number;
  description: string;
  frame_model: string;
  status: Statuses;
  title: string;
  large_img: string;
}
