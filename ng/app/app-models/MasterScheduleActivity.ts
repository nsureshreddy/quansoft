import { RateComponent } from "./rateComponent";

export class MasterScheduleActivity{
  _id: string;
  code: string;
  description: string;
  shortDescription: string;
  uom: string;
  rate: number;
  totalCost: number;
  ratePerUnit: number;
  rateComponents: Array<RateComponent>;
  profitMargin: number;
}