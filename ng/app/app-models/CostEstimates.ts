import { MasterBill } from './MasterBill';
import { User } from './user';

export class CostEstimates {
  vendor: string;
  bills: Array<MasterBill>;
  lastModified: User;
  status: string;

  constructor(fields: any) {
    for (const f in fields) {
      if (fields[f]) {
        this[f] = fields[f];
      }
    }
  }
}
