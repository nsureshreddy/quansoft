import { MasterScheduleActivity } from './MasterScheduleActivity';

export class MasterBill {
  _id: string;
  costCode: string;
  costCentre: string;
  activities: Array<MasterScheduleActivity>;

  constructor(fields: any) {
    for (const f in fields) {
      if (fields[f]) {
        this[f] = fields[f];
      }
    }
  }
}
