import { Statuses } from "./statusType";

export interface Bike {
  id: string;
  large_img?: string;
  title: string;
  description?: string;
  date_stolen: number;
  stolen_location?: string;
  status: Statuses;
  frame_model?: string;
}
