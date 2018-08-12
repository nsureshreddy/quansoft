import { MasterBill } from './MasterBill';

export class MasterSchedule {
  _id: string;
  code: string;
  description: string;
  bills: Array<MasterBill>;
}
