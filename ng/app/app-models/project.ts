import { Proposal } from "./proposal";
import { ScopeItem } from "./scopeItem";
import { TermsAndConditions } from "./termsAndConditions";
import { CostEstimates } from "./CostEstimates";
import { MasterBill } from "./MasterBill";

export class Project {
  jobId: string;
  name: string;
  client: string;
  location: string;
  region: string;
  stage: string;
  type: string;
  scope: Array<string>;
  siteArea: string;
  builtupArea: string;
  startDate: Date;
  endDate: Date;
  numberOfBuildings: number;
  numberOfFloors: number;
  orderNumber: number;
  orderValue: string;
  fsi: string;
  participants: Array<string>;
  proposal: Proposal;
  scopeItems: Array<ScopeItem>;
  termsAndonditions: TermsAndConditions;
  costEstimates: CostEstimates;
  quotations: any;
}