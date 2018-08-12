import { RateComponent } from './rateComponent';

export class MasterScheduleActivity {
  _id: string;
  code: string;
  description: string;
  shortDescription: string;
  uom: string;
  quantity: number;
  rate: number;
  amount: number;
  totalCost: number;
  ratePerUnit: number;
  rateComponents: Array<RateComponent>;
  profitMargin: number;
}
