import { MasterBill } from "./MasterBill";

export class CostEstimates {
  vendor: string;
  bills: Array<MasterBill>;

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }
}